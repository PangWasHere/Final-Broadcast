
var game = {

    HTMLElements: [
        {
            "gameCanvas": null,

            // Screens
            "screensGroup": null,
            "splashScreen": null,
            "defaultGameScreen": null,
            "callerDialogScreen": null,
            "chooseMusicScreen": null,
            "endingScreen": null,
            "creditsScreen": null,
            "loadingScreen": null,

            // Containers
            "dialogContainerBox": null,

            // Buttons
            "skipSongNextCallerButton": null,
            "nextButton": null,     // TODO: Rename to differentiate from Continue
            "continueButton": null,

            // Button Groups
            "broadcastButtonsGroup": null,
            "playPauseButtonsGroup": null,

            // Misc
            "loadedAudio": null,
            "sceneMessage": null,
            "speakerCard": null,
            "monolougeBox": null,
            "chooseMusicCarouselStage": null
        }
    ],

    listOfCallers: [],
    totalCallers: call_stories.length,
    numCallersBeforeNextSong: 3, // Keeps track of the number of callers before playing next song
    maxCallersEnding: 9,    //TODO: Change this to 9 when publishing
    djResponsePoints: {"honesty": 0, "empathy": 0, "practicality": 0},
    endingType: "default",
    maxNumOfSongChoices: 5,
    currentSongPlayingTrackNumber: -1,  // Keeps track of the current song track number
    STATUS: {"START": 'Game starting', "CHOOSE_MUSIC": false, "END": 'Showing ending'},
    currentGameStatus: '',
    init: function() {
        // Get all the HTML elements (once) to be used in the game
        // Use the HTMLElements["element_id"] to access the element/s
        game.getHTMLElements()

        game.context = game.HTMLElements["gameCanvas"].getContext("2d")

        loader.init() // Game will start once all assets are loaded

        game.setInitialListeners()
        game.currentGameStatus = game.STATUS.START
    },

    // Gets all the HTML elements used in the UI
    getHTMLElements: function() {
        game.HTMLElements["gameCanvas"] = document.getElementById("gameCanvas")

        game.HTMLElements["screensGroup"] = document.getElementsByClassName("screen")
        game.HTMLElements["splashScreen"] = document.getElementById("splashScreen")
        game.HTMLElements["defaultGameScreen"] = document.getElementById("defaultGameScreen")
        game.HTMLElements["callerDialogScreen"] = document.getElementById("callerDialogScreen")
        game.HTMLElements["chooseMusicScreen"] = document.getElementById("chooseMusicScreen")
        game.HTMLElements["endingScreen"] = document.getElementById("endingScreen")
        game.HTMLElements["creditsScreen"] = document.getElementById("creditsScreen")
        game.HTMLElements["loadingScreen"] = document.getElementById("loadingScreen")

        game.HTMLElements["dialogContainerBox"] = document.getElementById("dialogContainerBox")
        
        game.HTMLElements["skipSongNextCallerButton"] = document.getElementById("skipSongNextCallerButton")
        game.HTMLElements["nextButton"] = document.getElementById("nextButton")
        game.HTMLElements["continueButton"] = document.getElementById("continueButton")

        game.HTMLElements["broadcastButtonsGroup"] = document.getElementsByClassName("broadcast-button")
        game.HTMLElements["playPauseButtonsGroup"] = document.getElementsByClassName("play-pause-song-button")

        game.HTMLElements["dialogsGroup"] = document.getElementsByClassName("dialog")

        game.HTMLElements["loadedAudio"] = document.getElementById("continueButton")
        game.HTMLElements["sceneMessage"] = document.querySelector("#sceneBox .message")
        game.HTMLElements["speakerCard"] = document.getElementById("speakerCard")
        game.HTMLElements["monolougeBox"] = document.getElementById("monologueBox")
        game.HTMLElements["monolougeMessage"] = document.querySelector("#monologueBox .message")
        game.HTMLElements["chooseMusicCarouselStage"] = document.getElementById("chooseMusicCarouselStage")
    },

    // Sets the listeners for the HTML elements
    setInitialListeners: function() {

        game.HTMLElements["skipSongNextCallerButton"].addEventListener('click', function() {
            // Stop playing any songs
            if(loader.loadedAudio) {
                loader.loadedAudio.pause()
            }

            if(game.currentGameStatus == game.STATUS.END) {
                // Player chose silence for the last song
                game.showEndScene()
            } else {
                // Reset the number before next song and choosing music
                game.numCallersBeforeNextSong = 3
                game.choosing_music = false
                game.nextScene()
            }
        })

        if(loader.loadedAudio) {

            // Add click listeners for the Broadcast buttons
            let broadcast_buttons = game.HTMLElements["broadcastButtonsGroup"]

            for (let i = 0; i < broadcast_buttons.length; i++) {
                broadcast_buttons[i].addEventListener('click', game.broadcastSong, false)
            }

            // Add click listeners for the Play/Pause buttons
            let play_pause_buttons = game.HTMLElements["playPauseButtonsGroup"]

            for (let i = 0; i < play_pause_buttons.length; i++) {
                
                play_pause_buttons[i].addEventListener('click', game.playSongButtonClick, false)
            }

            // TODO: (High) Determine the best place to add this listener
            loader.loadedAudio.addEventListener("ended", game.resetPlayPauseButton, false)

        }
    },

    start: function() {
        // TODO: (High) Show the Main Menu screen
        game.showScreen("chooseMusicScreen")
    },

    hideScreens: function() {
        let screens = game.HTMLElements["screensGroup"]
        // Iterate through all the game layers and set their display to none
        for (let i = screens.length - 1; i >= 0; i--) {
            let screen = screens[i]

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

    /***** Functions related to choosing music *****/

    // Shows the UI for choosing music and game logic related to music
    chooseMusic: function() {
        game.hideScreens()
        game.showScreen("chooseMusicScreen")

        game.resetPlayPauseButton()

        // TODO: (High) Add logic involving player's choice of music
    },

    // Play the song and hides the Choose Music dialog
    broadcastSong: function(e) {
        e.currentTarget.setAttribute('disabled', '')

        // Play the track with the corresponding song_id
        let track_number = e.currentTarget.getAttribute('track-number')

        // Only play a new song if the song is not the same as the one playing
        if (!(game.currentSongPlayingTrackNumber == track_number)) {
            game.playSong(track_number)

            game.resetPlayPauseButton()
        }

        if(game.currentGameStatus == game.STATUS.END) {
            game.showEndScene()
        } else {
            // TODO: (Medium) Refactor, repeating code (Low)
            game.numCallersBeforeNextSong = 3
            game.choosing_music = false

            game.nextScene()
        }   
    },

    // Look for the songs loaded in the game
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

    // Play the song (as preview) - Choose Music dialog remains
    playSong: function(track_number) {
        let song = game.findSong(track_number)

        if(song != -1) { // Song is found

            loader.loadedAudio.src = song['song_url'] + ".mp3"
            loader.loadedAudio.play()

            game.currentSongPlayingTrackNumber = track_number

        } else {
            alert("Error: Can't find song")
        }
    },

    // Change the icon to play (if paused)
    // TODO: (Low) Refactor. Instead of looping everytime, is there a better way to update the play button
    resetPlayPauseButton: function(e) {
        let play_pause_buttons = game.HTMLElements["playPauseButtonsGroup"]

        for (let i = 0; i < play_pause_buttons.length; i++) {
            
            play_pause_buttons[i].classList.remove("paused")
        }
    },

    // Play button clicked. Music will be paused if playing, else play song.
    playSongButtonClick: function(e) {

        let button = e.currentTarget

        // Check if user clicked the button to stop the music
        // TODO: (Medium) Make it work for older browsers. https://stackoverflow.com/questions/5898656/check-if-an-element-contains-a-class-in-javascript
        if(!button.classList.contains("paused")) {
            loader.loadedAudio.pause()
        } else {
            // Stop all other songs from playing

            // Set all other play buttons to play (if they had the paused class)
            game.resetPlayPauseButton()
            
            button.classList.add("paused")

            let track_number = button.getAttribute('track-number')

            game.playSong(track_number)
        }

    },

    /***** Functions related to Callers *****/

    // Hide all dialog boxes
    hideDialogBoxesExcept: function(elementType) {
        
        const dialogs = game.HTMLElements["dialogsGroup"]
        // Iterate through all the dialogs and set their display to none
        for (let i = dialogs.length - 1; i >= 0; i--) {
            let dialog = dialogs[i]

            dialog.style.display = "none"
        }

        const dialogContainerBox = game.HTMLElements["dialogContainerBox"]
        dialogContainerBox.className = 'dialog-box'
        dialogContainerBox.classList.add(elementType)

        const shownDialogBox = document.getElementById(elementType + 'Box')
        shownDialogBox.style.display = "inline-block"
    },

    // Get a unique caller 
    getRandomCaller: function() {

        // Get a random number until a caller is found that hasn't called yet
        let randomCallerID = Math.floor(Math.random() * game.totalCallers)
        while(game.listOfCallers.includes(randomCallerID)) {
            randomCallerID = Math.floor(Math.random() * game.totalCallers)
        }

        game.listOfCallers.push(randomCallerID)

        return randomCallerID
    },

    // Display the call (UI)
    showCall: function(call_id) {
        // Make the interactive dialog appear
        game.hideScreens()
        game.showScreen("callerDialogScreen")
        game.hideDialogBoxesExcept("interactive")
        

        // Get the text elements
        // Since this is specific to this function, no need to store in HTMLElements
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
            // TODO: (High) Randomise the options positions (High)
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
                
                // GAME ENDING LOGIC: Add points based on the DJ response
                if(dj_response_type == "empathetic") {
                    game.djResponsePoints.empathy++
                } else if (dj_response_type == "practical") {
                    game.djResponsePoints.practicality++
                } else if(dj_response_type == "honest") { 
                    game.djResponsePoints.honesty++
                }

                game.showCallerResponse(caller_response, caller)
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

    // Show the respective response of the caller based on the DJ's response
    showCallerResponse: function(response, caller) {
   
        game.hideDialogBoxesExcept("scene")

        const sceneMessage = game.HTMLElements["sceneMessage"]
        sceneMessage.innerHTML = response

        const speakerCard = game.HTMLElements["speakerCard"]
        speakerCard.innerHTML = caller

        speakerCard.style.display = 'inline-block'

        const nextButton = game.HTMLElements["nextButton"]
        let randomNumber = Math.floor(Math.random() * game.nextButtonTextList.length)
        nextButton.innerHTML = game.nextButtonTextList[randomNumber]

        game.numCallersBeforeNextSong--;
    },

    // TODO: (Medium) REFACTOR THIS D<
    nextScene: function() {

        // Checks if the number of caller reached the maximum
        if (game.listOfCallers.length >= game.maxCallersEnding) {
            game.currentGameStatus = game.STATUS.END
            // TODO: (Medium) Special ending based on the last song played (Next Phase)
            game.chooseMusic()
        } else {

            // Check if the number of callers before next song is reached
            if(game.numCallersBeforeNextSong <= 0) {

                game.hideDialogBoxesExcept("scene")
                const sceneMessage = game.HTMLElements["sceneMessage"]
                sceneMessage.innerHTML = "<em>(Time to pick another song)<em>"

                const speakerCard = game.HTMLElements["speakerCard"]
                speakerCard.style.display = 'none';

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

    /*****  Functions related to ending  *****/

    // Check and set the ending type of the game
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

    // Show the Ending Screen and display the appropriate ending
    showEndScene: function() {
        game.hideScreens()
        game.showScreen("endingScreen")

        game.checkEndingType()

        let messages = ending_monolouges[game.endingType]['messages']
        let message_num = 0
        console.log(messages)

        game.HTMLElements["monolougeBox"].style.display = 'inline-block'
        game.HTMLElements["monolougeMessage"].innerHTML = messages[message_num]

        game.HTMLElements["continueButton"].addEventListener('click', function() { 
              
            if (message_num >= messages.length - 1) {
                // Reached the end of the monologue
            } else if (message_num >= messages.length - 2) {
                game.HTMLElements["endingScreen"].classList.remove("default-game-background")
                    this.style.display = "none"
                    message_num++;

                    // Stop the music
                    // TODO: (High) Play the crashing sound of the meteor
                    loader.loadedAudio.pause()
                    // TODO: (High) For credits, play the song that wasn't chosen by the player (If played all four)
                    // If no song were played throughout game, play static noise all throughout the credits
                    // If player only played one song, play that song
                    // If payer skipped some songs, play the last song they chose
            } else  {
                message_num++;
            }

            game.HTMLElements["monolougeMessage"].innerHTML = messages[message_num]
        })
    }
}

var loader = {
    loadded: true,
    loadedCount: 0,     // Assets that have been loaded so far
    totalCount: 0,      // Total number of assets that need loading
    loadedAudio: null,
    loadedGameSongs: [],
    firstLoaderDate: null,
    fakeProgressTime: 3000, // milliseconds
    init: function() {

        // Initialise the loader date to compare for loading progress
        loader.firstLoaderDate = new Date()
        console.log(loader.firstLoaderDate, " loading started...")

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
        let current_game_songs = utils.getMultipleRandom(game_songs, 5)

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
   
        const chooseMusicCarouselStage = game.HTMLElements["chooseMusicCarouselStage"]

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
            item__song_details.classList.add("carousel__item-content-box")

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

                    /* TODO: (Low) Removed temporarily. Add a duration slider. Take note that the HTML will need to be rearranged. */
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
                        // TODO: (Low) Set the actual duration of song
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

            /*   (Low)Temporarily hidden because of new layout. To be added when duration slider is added.*/
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

        if (loader.loadedCount === loader.totalCount) {
            // Loader has loaded completely..
            // Reset and clear the loader
            loader.loaded = true
            loader.loadedCount = 0
            loader.totalCount = 0

            let loadingEndedDate = new Date()
            // Set the fake progress time to be at least 3 seconds (3000ms)
            let progressTime = loader.fakeProgressTime - (loadingEndedDate.getMilliseconds() - loader.firstLoaderDate.getMilliseconds())

            setTimeout(function(){
                // Hide the loading screen
                game.hideScreen("loadingScreen")

                // START. Game starts after loading all assets
                game.start()
            }, progressTime)
            

            // and call the loader.onload method if it exists
            if(loader.onload) {
                loader.onload()
                loader.onload = undefined
            }
        }
    }

}


var utils = {
    getMultipleRandom: function(arr, num) {
        const shuffled = [...arr].sort(() => 0.5 - Math.random());

        return shuffled.slice(0, num);
    },
}

// Initialise game once page has fully loaded
window.addEventListener("load", function() {
    game.init()
})

// Disable right-click
const gameElement = document.getElementById("game")
gameElement.addEventListener('contextmenu', event => event.preventDefault());