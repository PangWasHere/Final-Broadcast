
var game = {

    // TODO: Get all the elements of the game as constants into the game for easy access
    
    listOfCallers: [],
    totalCallers: call_stories.length,
    numCallersBeforeNextSong: 3, //TODO: For Next Phase
    maxCallersEnding: 9,    //TODO: Change this to 9 when publishing
    djResponsePoints: {"honesty": 0, "empathy": 0, "practicality": 0},
    endingType: "default",
    maxNumOfSongChoices: 5,
    currentSongPlayingTrackNumber: -1,
    init: function() {
        game.canvas = document.getElementById("gameCanvas")
        game.context = game.canvas.getContext("2d")

        loader.init()
        game.setInitialListeners()
        
    },

    setInitialListeners: function() {
        const skipSongNextCallerButton = document.getElementById("skipSongNextCallerButton")
        

        skipSongNextCallerButton.addEventListener('click', function() {
            // Stop playing any songs
            if(loader.loadedAudio) {
                loader.loadedAudio.pause()
            }

            // Reset the number before next song and choosing music
            game.numCallersBeforeNextSong = 3
            game.choosing_music = false

            game.nextScene()
        })

        let play_pause_buttons = document.getElementsByClassName("play-pause-song-button")

            for (let i = 0; i < play_pause_buttons.length; i++) {
                
                play_pause_buttons[i].addEventListener('click', game.playSongButtonClick, false)
            }

    },

    start: function() {
        game.showScreen("callerDialogScreen")
        game.showCall(game.getRandomCaller())
    },

    hideScreens: function() {
        var screens = document.getElementsByClassName("gamelayer")
        // Iterate through all the game layers and set their display to none
        for (let i = screens.length - 1; i >= 0; i--) {
            var screen = screens[i]

            screen.style.display = "none"
        }
    },

    hideScreen: function(id) {
        var screen = document.getElementById(id)

        screen.style.display = "none";
    },

    showScreen: function(id) {
        var screen = document.getElementById(id)

        screen.style.display = "block"
    },

    choosing_music: false,

    // Functions related to choosing music
    chooseMusic: function() {
        game.hideScreens()
        game.showScreen("chooseMusicScreen")

        let play_pause_buttons = document.getElementsByClassName("play-pause-song-button")

            for (let i = 0; i < play_pause_buttons.length; i++) {
                
                play_pause_buttons[i].classList.remove("paused")
            }

        if(loader.loadedAudio) {
            

            let broadcast_buttons = document.getElementsByClassName("broadcast-button")

            for (let i = 0; i < broadcast_buttons.length; i++) {
                
                broadcast_buttons[i].addEventListener('click', game.broadcastSong, false)
            }
        }

        

        const chooseMusicContainer = document.getElementById("chooseMusicContainerBox")
        // TODO: Add logic involving player's choice of music
    },

    broadcastSong: function(e) {
        e.currentTarget.setAttribute('disabled', '')

        // Play the track with the corresponding song_id
        let track_number = e.currentTarget.getAttribute('track-number')

        if (!game.currentSongPlayingTrackNumber == track_number) {
            game.playSong(track_number)

            // TODO: Refactor. Repeating code
            let play_pause_buttons = document.getElementsByClassName("play-pause-song-button")

                for (let i = 0; i < play_pause_buttons.length; i++) {
                    
                    play_pause_buttons[i].classList.remove("paused")
                }
        }
        

        // TODO: Refactor, repeating code
        game.numCallersBeforeNextSong = 3
        game.choosing_music = false

        game.nextScene()
    },

    findSong: function(track_number) {
        let songs = loader.loadedGameSongs
        let songToReturn = -1

        
        for(let i = 0; i < songs.length; i++) {
            if(songs[i]['song_id'] == track_number) {
                songToReturn = songs[i]
            }
        }

        return songToReturn
    },

    playSong: function(track_number) {
        let song = game.findSong(track_number)

        if(song != -1) { // Song is found

            loader.loadedAudio.src = song['song_url'] + ".mp3"
            loader.loadedAudio.play()

            game.currentSongPlayingTrackNumber = track_number

        } else {
            alert("Can't find song")
        }
    },

    playSongButtonClick: function(e) {

        let button = e.currentTarget

        // Check if user clicked the button to stop the music
        // TODO: Make it work for older browsers. https://stackoverflow.com/questions/5898656/check-if-an-element-contains-a-class-in-javascript
        if(!button.classList.contains("paused")) {
            loader.loadedAudio.pause()
        } else {
            // Stop all other songs from playing

            // Set all other play buttons to play (if they had the paused class)
            // TODO: Refactor this. Repeating code?
            let play_pause_buttons = document.getElementsByClassName("play-pause-song-button")

            for (let i = 0; i < play_pause_buttons.length; i++) {
                
                play_pause_buttons[i].classList.remove("paused")
            }

            button.classList.add("paused")

            let track_number = button.getAttribute('track-number')

            game.playSong(track_number)
        }

    },

    // Functions related to Callers

    hideDialogBoxesExcept: function(elementType) {
        // Hide all dialog boxes

        var screens = document.getElementsByClassName("dialog")
        // Iterate through all the dialogs and set their display to none
        for (let i = screens.length - 1; i >= 0; i--) {
            var screen = screens[i]

            screen.style.display = "none"
        }

        const dialogContainerBox = document.getElementById("dialogContainerBox")
        dialogContainerBox.className = 'dialog-box'
        dialogContainerBox.classList.add(elementType)

        const shownDialogBox = document.getElementById(elementType + 'Box')
        shownDialogBox.style.display = "inline-block"
    },
    getRandomCaller: function() {

        // Get a random number until a caller is found that hasn't called yet
        let randomCallerID = Math.floor(Math.random() * game.totalCallers)
        while(game.listOfCallers.includes(randomCallerID)) {
            randomCallerID = Math.floor(Math.random() * game.totalCallers)
        }

        game.listOfCallers.push(randomCallerID)

        return randomCallerID
    },

    showCall: function(call_id) {
        // Make the interactive dialog appear
        game.hideScreens()
        game.showScreen("callerDialogScreen")
        game.hideDialogBoxesExcept("interactive")
        

        // Get the text elements
        const prompt = document.querySelector("#interactiveBox .prompt")
        const optionBox = document.querySelector("#interactiveBox .option-box")
        const callerDescription = document.querySelector("#callerDescriptionBox")

        // Display the caller and their message 
        callerDescription.innerHTML = call_stories[call_id]['caller']
        prompt.innerHTML = call_stories[call_id]['call']

        // Remove options (if exists)
        while (optionBox.hasChildNodes()) {
            optionBox.removeChild(optionBox.firstChild)
        }

        // Display all options with corresponding description
        let dj_response_options = call_stories[call_id]['options']
        
        for (let i = dj_response_options.length - 1; i >= 0; i--) {
            // TODO: Randomise the options positions
            let option = document.createElement("p")
            option.innerHTML = dj_response_options[i].response
            option.classList.add("option")

            dj_response_type = dj_response_options[i].type
            option.setAttribute('response-type', dj_response_type)

            option.addEventListener('click', function() {
                // Get type response
                dj_response_type = option.getAttribute('response-type')
                caller = call_stories[call_id]['caller']
                caller_response = call_stories[call_id][dj_response_type + '-response']
                game.showCallerResponse(dj_response_type, caller_response, caller)
            })

            optionBox.appendChild(option)
        }
    },

    nextButtonTextList: [
        "Proceed",
        "Advance",
        "Move forward",
        "Keep going",
        "Onward",
        "Press ahead",
        "Carry on",
        "Next step",
        "Forge ahead",
        "Push forward",
        "Resume",
        "Continue",
        "Go ahead",
        "Push onward",
        "Next"
      ],

    showCallerResponse: function(dj_response_type, response, caller) {
        // TODO: Refactor this so it only shows the caller reponse

        if(dj_response_type == "empathetic") {
            game.djResponsePoints.empathy++
        } else if (dj_response_type == "practical") {
            game.djResponsePoints.practicality++
        } else if(dj_response_type == "honest") { 
            game.djResponsePoints.honesty++
        }


        game.hideDialogBoxesExcept("scene")
        const sceneMessage = document.querySelector("#sceneBox .message")
        sceneMessage.innerHTML = response

        const speakerBox = document.getElementById("speakerBox")
        speakerBox.innerHTML = caller

        speakerBox.style.display = 'inline-block'

        const buttonNext = document.getElementById("buttonNext")
        let randomNumber = Math.floor(Math.random() * game.nextButtonTextList.length)
        buttonNext.innerHTML = game.nextButtonTextList[randomNumber]

        game.numCallersBeforeNextSong--;
    },

    nextScene: function() {

        // TODO: REFACTOR THIS D<

        // Checks if the number of caller reached the maximum
        if (game.listOfCallers.length >= game.maxCallersEnding) {
            // TODO: End game. Allow player to choose one last song to play while the monologue happens
            game.showEndScene()
        } else {

            // Check if the number of callers before next song is reached
            if(game.numCallersBeforeNextSong <= 0) {

                game.hideDialogBoxesExcept("scene")
                const sceneMessage = document.querySelector("#sceneBox .message")
                sceneMessage.innerHTML = "<span class='test'>It's time for another song...</span>"

                const speakerBox = document.getElementById("speakerBox")
                speakerBox.style.display = 'none';

                if (game.choosing_music) {
                    game.chooseMusic()
                    game.numCallersBeforeNextSong = 3 // Resets for the next song
                    game.choosing_music = false
                }

                game.choosing_music = true
            } else {
                game.showCall(game.getRandomCaller())
                
            }
        }
       
    },

    // Functions related to ending 
    checkEndingType: function() {

        let honest_points = game.djResponsePoints.honesty
        let practical_points = game.djResponsePoints.practicality
        let empathetic_points = game.djResponsePoints.empathy

        if (honest_points >= game.maxCallersEnding) {
            // Player chooses honesty all the time
            game.endingType = "honest"
        } else if (practical_points >= game.maxCallersEnding) {
            // Player chooses honesty all the time
            game.endingType = "practical"
        } else if (empathetic_points >= game.maxCallersEnding) {
            // Player chooses honesty all the time
            game.endingType = "empathetic"
        } else {
            game.endingType = "open-ended"
        }
    },

    showEndScene: function() {
        game.hideScreens()
        game.showScreen("endingScreen")

        game.checkEndingType()

        let messages = ending_monolouges[game.endingType]['messages']
        let message_num = 0
        console.log(messages)

        const endingScreen = document.getElementById("endingScreen")
        const monologueBox = document.getElementById("monologueBox")
        const monologueBoxMessage = document.querySelector("#monologueBox .message")
        const buttonContinue = document.getElementById("buttonContinue")

        monologueBox.style.display = 'inline-block'

        monologueBoxMessage.innerHTML = messages[message_num]

        buttonContinue.addEventListener('click', function() { 
              
            if (message_num >= messages.length - 1) {
                // Reached the end of the monologue
            } else if (message_num >= messages.length - 2) {
                    endingScreen.classList.remove("default-game-background")
                    this.style.display = "none"
                    message_num++;
            } else  {
                message_num++;
            }

            monologueBoxMessage.innerHTML = messages[message_num]
        })
    }
}

var loader = {
    loadded: true,
    loadedCount: 0,     // Assets that have been loaded so far
    totalCount: 0,      // Total number of assets that need loading
    loadedAudio: null,
    loadedGameSongs: [],
    init: function() {
        // Check for sound support
        var mp3Support, oggSupport
        var audio = document.createElement("audio")

        if (audio.canPlayType) {
            // Currently canPlayType() returns: "", "maybe" or "probably"
            // https://www.w3schools.com/tags/av_met_canplaytype.asp
            mp3Support = "" !== audio.canPlayType("audio/mpeg")
            oggSupport = "" !== audio.canPlayType("audio/ogg; codecs=\"vorbos\"")
        } else {
            // The audio tag is not supported
            mp3Support = false
            oggSupport = false
        }

        // Check for ogg, then mp3, and finally set soundFileExtn to undefined
        loader.soundFileExtn = oggSupport ? ".ogg" : mp3Support ? ".mp3" : undefined

        // Show loading screen
        game.hideScreens()
        game.showScreen("loadingScreen")

        // Get five random songs to load into the game
        let current_game_songs = loader.getMultipleRandom(game_songs, 5)

        loader.createMusicChooserUI(current_game_songs)
        
        // Create the audio elements to play the songs
        for(let i = current_game_songs.length - 1; i >= 0; i--) {
            loader.loadedAudio = loader.loadSound(current_game_songs[i]['song_url'])
            
            let song = {
                "song_id": current_game_songs[i]['song_id'],
                "song_url": current_game_songs[i]['song_url'],
                "song_title": current_game_songs[i]['song_title'],
            }

            loader.loadedGameSongs.push(song)

            loader.loadedAudio.load()
        }
    },

    createMusicChooserUI: function(current_game_songs) {

        let num_songs = current_game_songs.length
   
        const chooseMusicCarouselStage = document.getElementById("chooseMusicCarouselStage")

        // Create the radio buttons
        for(let i = 0; i < num_songs; i++) { 
            let item_input = document.createElement("input")
            item_input.classList.add('carousel__item-input')
            item_input.setAttribute('type', 'radio')
            item_input.setAttribute('name', 'item')
            item_input.setAttribute('id', 'input_' + i)

            if (i === 0) {
                item_input.setAttribute('checked', 'checked')
            }

            chooseMusicCarouselStage.appendChild(item_input)
        }

        // Create the elements for showing the songs
        for(let i = 0; i < num_songs; i++) {
            let carousel__item_content = document.createElement("div")
            carousel__item_content.classList.add("carousel__item-content")

            let item__song_details = document.createElement("div")
            item__song_details.classList.add("item__song-details")

                let song_info_container = document.createElement("div")

                let song_title = document.createElement("p")
                song_title.classList.add("song-title")
                song_title.innerHTML = current_game_songs[i]['song_title'] 

                let song_artist = document.createElement("p")
                song_artist.classList.add("song-artist")
                song_artist.innerHTML = current_game_songs[i]['song_artist'] 
                
                song_info_container.appendChild(song_title)
                song_info_container.appendChild(song_artist)

                let music_player = document.createElement("div")
                music_player.classList.add("music-player")

                    let play_pause_button = document.createElement("button")
                    play_pause_button.classList.add("play-pause-song-button")
                    play_pause_button.setAttribute('role', 'button')
                    play_pause_button.setAttribute('track-number', current_game_songs[i]['song_id'])

                    play_pause_button.addEventListener("click", function(e){
                        let button = e.currentTarget

                        if (button.classList.contains("paused")) {
                            button.classList.remove("paused")
                        } else {
                            button.classList.add("paused")
                        }
                        
                        return false
                    })

                music_player.append(play_pause_button)    
                music_player.append(song_info_container)

                    /* TODO: Removed temporarily. Add a duration slider. Take note that the HTML will need to be rearranged. */
                   /* let slider_duration_container = document.createElement("div")

                    let track_slider = document.createElement("div")
                    track_slider.classList.add("song-track-slider")

                        let slider = document.createElement("input")
                        slider.setAttribute('type', 'range')
                        slider.setAttribute('min', 0)
                        slider.setAttribute('value', 0)
                        slider.setAttribute('id', 'song-' + i + '-slider')

                    track_slider.appendChild(slider)

                    let duration_display = document.createElement("div")
                    duration_display.classList.add("song-time-display")

                        let span_current_time = document.createElement("span")
                        span_current_time.setAttribute('id', 'song-' + i + '-start')
                        span_current_time.innerHTML = "00:00"

                        let span_end = document.createElement("span")
                        span_end.setAttribute('id', 'song-' + i + '-start')
                        // TODO: Set the actual duration of song
                        span_end.innerHTML = " / " + current_game_songs[i]['song_duration']
                    
                        
                    duration_display.appendChild(span_current_time)
                    duration_display.appendChild(span_end)
                    

                    slider_duration_container.appendChild(track_slider)
                    slider_duration_container.appendChild(duration_display)

                music_player.appendChild(slider_duration_container) */

                let broadcast_button = document.createElement("button")
                broadcast_button.classList.add("button-next")
                broadcast_button.classList.add("broadcast-button")
                broadcast_button.setAttribute('role', 'button')
                broadcast_button.setAttribute('track-number', current_game_songs[i]['song_id'])
                broadcast_button.innerHTML = "Broadcast"

            /* TODO: Temporarily hidden because of new layout. To be added when duration slider is added.*/
            /*item__song_details.append(song_title)
            item__song_details.append(song_artist)*/
            
            item__song_details.append(music_player)
            item__song_details.append(broadcast_button)

            carousel__item_content.appendChild(item__song_details)
            chooseMusicCarouselStage.appendChild(carousel__item_content)
        }

        // Create the labels for the slider
        for(let i = 0; i < num_songs; i++) { 
            let item_label = document.createElement("label")
            item_label.classList.add('carousel__item-label')
            item_label.setAttribute('for', 'input_' + i)
            chooseMusicCarouselStage.appendChild(item_label)
        }
    },
    getMultipleRandom: function(arr, num) {
        const shuffled = [...arr].sort(() => 0.5 - Math.random());

        return shuffled.slice(0, num);
    },

    loadImage: function(url) {
        this.loaded = false
        this.totalCount++;

        game.showScreen("loadingScreen")

        var image = new Image()

        image.addEventListener("load", loader.itemLoaded, false)
        image.src = url
        
        return image
    },

    soundFileExtn: ".ogg",

    loadSound: function(url) {
        this.loaded = false
        this.totalCount++

        var audio = new Audio()

        audio.addEventListener("canplaythrough", loader.itemLoaded, false)
        audio.src = url + loader.soundFileExtn

        return audio
    },

    itemLoaded: function(ev) {
        // Stop listening for event type (load or canplaythrough) for this item now that it has been loaded
        ev.target.removeEventListener(ev.type, loader.itemLoaded, false)

        loader.loadedCount++

        document.getElementById("loadingmessage").innerHTML = "Loaded " + loader.loadedCount + " of  " + loader.totalCount

        console.log("Loaded " + loader.loadedCount + " of  " + loader.totalCount)

        if (loader.loadedCount === loader.totalCount) {
            // Loader has loaded completely..
            // Reset and clear the loader
            loader.loaded = true
            loader.loadedCount = 0
            loader.totalCount = 0

            // Hide the loading screen
            game.hideScreen("loadingScreen")
            game.start()

            // and call the loader.onload method if it exists
            if(loader.onload) {
                loader.onload()
                loader.onload = undefined
            }
        }
    }

}

// Initialise game once page has fully loaded
window.addEventListener("load", function() {
    game.init()
})