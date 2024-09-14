var screens = {
    "LOADING": "loadingScreen",
    "MAIN_MENU": "mainMenuGameScreen",
    "GAME_SCENE": "gameSceneScreen",
    "CHOOSE_MUSIC": "chooseMusicScreen",
    "JUST_MUSIC": "justMusicScreen",
    "CALLER_DIALOG": "callerScreen"
}

var screens_list = [
    "loadingScreen",
    "mainMenuGameScreen",
    "gameSceneScreen",
    "chooseMusicScreen",
    "justMusicScreen",
    "callerScreen"
]

var game_status_log = []

var GAME_STATUS = {
        "GAME_START": 'GAME_STATUS_GameStarting',
        "BROADCASTING_FIRST_SONG": "GAME_STATUS_BroadcastingFirstSong",
        "CHOOSING_MUSIC": 'GAME_STATUS_ChoosingMusic', 
        "BROADCASTING_MUSIC": 'GAME_STATUS_BroadcastingMusic',
        "ON_CALL_BROADCASTED_MUSIC": 'GAME_STATUS_BroadcastedMusic',
        "TAKING_CALLS": 'GAME_STATUS_TakingCalls',
        "ON_CALL_SKIPPED_MUSIC": "GAME_STATUS_OnCallSkippingMusic", 
        "DJ_RESPONSED": 'GAME_STATUS_DJResponded',
        "DJ_NARRATING": 'GAME_STATUS_DJNarrating',
        "CALLER_RESPONDED": "GAME_STATUS_CallerResponded",
        "LAST_SONG_DIALOUGE": "GAME_STATUS_LastSongDialouge",
        "FINISHED_LAST_SONG_DIALOUGE": "GAME_STATUS_FinishedLastSongDialouge",
        "BROADCASTING_LAST_SONG": 'GAME_STATUS_BroadcastingLastSong',
        "SHOWING_END_MESSAGE": 'GAME_STATUS_ShowingEndMessage',
        "SHOWING_CREDITS": 'GAME_STATUS_ShowingCredits',

        "CALLING_GROUP_END": 'GAME_STATUS_CallingGroupEnd',
    }

var DIALOG_SCENES = {
    "NARRATION_DJ": "DIALOG_SCENES_NarrationDJ",
    "CALLER_RESPONSE": "DIALOG_SCENES_CallerReponse",
    "CHOOSE_NEXT_SONG": "DIALOG_SCENES_ChooseNextSong",
    "END_MESSAGE": "DIALOG_SCENES_EndMessage",
    "LAST_SONG": "DIALOG_SCENE_LastSong"
}


var game = {

    HTMLElements: [ {} ],

    scenesScript: {},
    currentScriptDialog: [],

    listOfCallers: [],
    totalCallers: call_stories.length,
    currentCaller: {},
    
    currentCallerGroup: 1,
    maxCallsBeforeNextSong: 3,
    numCallersBeforeNextSong: 0, // Keeps track of the number of callers before playing next song
    maxCallersEnding: 9,    //TODO: Change this to 9 when publishing
    
    djResponsePoints: {"honesty": 0, "empathy": 0, "practicality": 0},
    endingType: "default",
    
    maxNumOfSongChoices: 5,
    currentSongPlayingTrackNumber: -1,  // Keeps track of the current song track number
    
    currentGameStatus: '',

    // TODO: (Medium) Technical Debt. Hack.
    isEnding: false,

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
    
    init: function() {
        // Get all the HTML elements (once) to be used in the game
        // Use the HTMLElements["element_id"] to access the element/s
        game.getHTMLElements()

        game.context = game.HTMLElements["gameCanvas"].getContext("2d")

        loader.init() // Game will start once all assets are loaded

        game.setInitialListeners()

        game.setGameStatus(GAME_STATUS.START)
        game.numCallersBeforeNextSong = game.maxCallsBeforeNextSong
    },

    // Gets all the HTML elements used in the UI
    getHTMLElements: function() {
        game.HTMLElements["gameCanvas"] = document.getElementById("gameCanvas")

        game.HTMLElements["screensGroup"] = document.getElementsByClassName("screen")
        game.HTMLElements["splashScreen"] = document.getElementById("splashScreen")
        game.HTMLElements["mainMenuGameScreen"] = document.getElementById("mainMenuGameScreen")
        game.HTMLElements["callerScreen"] = document.getElementById("callerScreen")
        game.HTMLElements["chooseMusicScreen"] = document.getElementById("chooseMusicScreen")
        game.HTMLElements["justMusicScreen"] = document.getElementById("justMusicScreen")
        game.HTMLElements["endingScreen"] = document.getElementById("endingScreen")
        game.HTMLElements["creditsScreen"] = document.getElementById("creditsScreen")
        game.HTMLElements["loadingScreen"] = document.getElementById("loadingScreen")

        game.HTMLElements["dialogContainerBox"] = document.getElementById("dialogContainerBox")
        game.HTMLElements["monolougeContainerBox"] = document.getElementById("monolougeContainerBox")
        
        game.HTMLElements["skipSongNextCallerButton"] = document.getElementById("skipSongNextCallerButton")
        game.HTMLElements["gameSceneNextButton"] = document.getElementById("gameSceneNextButton")
        game.HTMLElements["contemplateButton"] = document.getElementById("contemplateButton")
        game.HTMLElements["takeCallButton"] = document.getElementById("takeCallButton")
        game.HTMLElements["showEndMessageButton"] = document.getElementById("showEndMessageButton")
        game.HTMLElements["finalMessageNextButton"] = document.getElementById("finalMessageNextButton")

        game.HTMLElements["broadcastButtonsGroup"] = document.getElementsByClassName("broadcast-button")
        game.HTMLElements["playPauseButtonsGroup"] = document.getElementsByClassName("play-pause-song-button")

        game.HTMLElements["dialogsGroup"] = document.getElementsByClassName("dialog")

        game.HTMLElements["loadedAudio"] = document.getElementById("continueButton")
        game.HTMLElements["gameSceneMessage"] = document.querySelector("#gameSceneBox .message")
        // TODO: (Medium) Merge the sceneMessage and gameSceneMessage and monologueMessage
        game.HTMLElements["sceneMessage"] = document.querySelector("#sceneBox .message")
        game.HTMLElements["speakerCard"] = document.getElementById("speakerCard")
        game.HTMLElements["monolougeBox"] = document.getElementById("monologueBox")
        game.HTMLElements["monolougeMessage"] = document.querySelector("#monologueBox .message")
        game.HTMLElements["chooseMusicCarouselStage"] = document.getElementById("chooseMusicCarouselStage")
    },

    // Sets the listeners for the HTML elements
    setInitialListeners: function() {

        game.HTMLElements["skipSongNextCallerButton"].addEventListener('click', function() {

            if(game.isEnding) {
                // Player chose silence for the last song
                game.stopCurrentSong()
                game.showEndScene()
            } else {
                game.setGameStatus(GAME_STATUS.ON_CALL_SKIPPED_MUSIC)
                game.showNextScene()
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
            loader.loadedAudio.addEventListener("ended", game.musicEnded, false)

        }
    },

    gameLoaded: function() {
        // DEBUG: Use this space to view certain screens out of the game flow
        //game.showScreen(screens.CALLER_DIALOG)
        game.showScreen(screens.MAIN_MENU)
    },

    setGameStatus: function (newStatus) {
        game_status_log.push(newStatus)
        game.currentGameStatus = newStatus
    },

    start: function() {
        game.showScreen(screens.GAME_SCENE)

        // Check the game data and load appropriate script
        //TODO: (Medium) Script changes based on the players gameplay
        game.scenesScript = game_scripts["default"]

        game.setGameStatus(GAME_STATUS.GAME_START)
        game.showNextScene()
    },

    // Contains the logic to check the next scene based on the game status
    showNextScene: function() {
        switch (game.currentGameStatus) {
            case GAME_STATUS.GAME_START:
                // Get a random starting script
                game.currentScriptDialog = utils.sample(game.scenesScript["START"])
                game.showDialogScene(DIALOG_SCENES.NARRATION_DJ)
                break;
            case GAME_STATUS.BROADCASTING_FIRST_SONG:
                game.chooseMusic()
                break;
            case GAME_STATUS.DJ_NARRATING: 
                break;
            case GAME_STATUS.BROADCASTING_MUSIC:
                game.showScreen(screens.JUST_MUSIC)
                break;
            case GAME_STATUS.ON_CALL_BROADCASTED_MUSIC:
                game.setGameStatus(GAME_STATUS.TAKING_CALLS)
                game.showNextScene()
                break;
            case GAME_STATUS.ON_CALL_SKIPPED_MUSIC:
                game.stopCurrentSong()
                game.setGameStatus(GAME_STATUS.TAKING_CALLS)
                game.showNextScene()
                break;
            case GAME_STATUS.TAKING_CALLS:
                game.showCallerScene();
                break;
            case GAME_STATUS.DJ_RESPONSED:
                game.currentScriptDialog = [game.currentCaller["response"]]
                game.showDialogScene(DIALOG_SCENES.CALLER_RESPONSE)
                break;
            case GAME_STATUS.CALLER_RESPONDED:
                // Check number of callers before next song

                if (game.numCallersBeforeNextSong > 0) {
                    game.setGameStatus(GAME_STATUS.TAKING_CALLS)
                    game.showNextScene()
                } else {
                    // Reset the number of callers before the next song
                    game.numCallersBeforeNextSong = game.maxCallsBeforeNextSong
                    game.currentCallerGroup++

                    game.setGameStatus(GAME_STATUS.CALLING_GROUP_END)
                    game.showNextScene()
                }
                
                /*if(game.listOfCallers.length < game.maxCallersEnding) {
                    // Do Nothing
                } else {
                    game.setGameStatus(GAME_STATUS.LAST_SONG_DIALOUGE)
                }*/
                break;

            case GAME_STATUS.CALLING_GROUP_END:

                if(game.currentCallerGroup == 2) {
                    game.currentScriptDialog = ["Thanks for still tuning it.", "Let's pick up another song, shall we?"]
                    game.showDialogScene(DIALOG_SCENES.CHOOSE_NEXT_SONG)
                } else if(game.currentCallerGroup == 3) {
                    //game.setGameStatus(GAME_STATUS.LAST_SONG_DIALOUGE)
                }
                break;

            case GAME_STATUS.CHOOSING_MUSIC:
                game.chooseMusic()

                if(game.currentGameStatus == GAME_STATUS.BROADCASTING_LAST_SONG) {
                    game.isEnding = true
                    game.setGameStatus(GAME_STATUS.SHOWING_END_MESSAGE)
                }
                break;
            case GAME_STATUS.LAST_SONG_DIALOUGE:
                game.currentScriptDialog = utils.sample(game_scripts["PLAY_LAST_SONG"])
                game.isEnding = true
                game.showDialogScene(DIALOG_SCENES.LAST_SONG)
                break;
            case GAME_STATUS.FINISHED_LAST_SONG_DIALOUGE:
                game.setGameStatus(GAME_STATUS.BROADCASTING_LAST_SONG)
                break;
            case GAME_STATUS.BROADCASTING_LAST_SONG:
                // Change Next Caller Button to Keep Silence
                game.HTMLElements["skipSongNextCallerButton"].innerHTML = "Prefer Silence Till End"

                // Remove buttons from the Just Music Screen
                game.HTMLElements["contemplateButton"].style.display = 'none'
                game.HTMLElements["takeCallButton"].style.display = 'none'
                game.HTMLElements["showEndMessageButton"].style.display = 'block'

                game.chooseMusic()
                break;
            case GAME_STATUS.SHOWING_END_MESSAGE:
                //game.showEndScene()
                break;
            case GAME_STATUS.SHOWING_CREDITS:
                
                break;
        }
    },

    // Show the Dialog UI (No Game Logic)
    // typeScene determines if the dialog scene will:
    // ("NARRATION_DJ"): no speaker card
    // ("CALLER_RESPONSE"): display the speaker card
    showDialogScene: function(sceneType) {
        
        game.showScreen(screens.GAME_SCENE)

        if (sceneType == DIALOG_SCENES.CALLER_RESPONSE) {
            game.HTMLElements["speakerCard"].innerHTML = game.currentCaller['caller']
            game.HTMLElements["speakerCard"].style.display = 'inline-block'

            
            game.setGameStatus(GAME_STATUS.CALLER_RESPONDED)
            
        } else if (sceneType == DIALOG_SCENES.NARRATION_DJ || sceneType == DIALOG_SCENES.END_MESSAGE || sceneType == DIALOG_SCENES.CHOOSE_NEXT_SONG) { 
            
            game.HTMLElements["speakerCard"].innerHTML = game.currentCaller['caller']
            game.HTMLElements["speakerCard"].style.display = 'none'

            if (game.currentGameStatus == GAME_STATUS.GAME_START) {
                game.setGameStatus(GAME_STATUS.BROADCASTING_FIRST_SONG)
            } else {
                game.setGameStatus(GAME_STATUS.DJ_NARRATING)
            }
            
        } else if (sceneType == DIALOG_SCENES.END_MESSAGE) {
            game.setGameStatus(GAME_STATUS.SHOWING_CREDITS)
        }

        let script = game.currentScriptDialog
        let message_index = 0

        game.HTMLElements["gameSceneMessage"].innerHTML = script[message_index]
        
        game.HTMLElements["gameSceneNextButton"].addEventListener('click', function(e) {
            if(message_index < script.length - 1) {
                message_index++
                game.HTMLElements["gameSceneMessage"].innerHTML = script[message_index]
            } else {
                if (sceneType == DIALOG_SCENES.CHOOSE_NEXT_SONG) {
                    game.setGameStatus(GAME_STATUS.CHOOSING_MUSIC)
                    
                } 

                game.showNextScene()
                

                /*if (sceneType == DIALOG_SCENES.LAST_SONG) {
                     game.setGameStatus(GAME_STATUS.FINISHED_LAST_SONG_DIALOUGE)
                }*/
            } 
        })
        
    },

    showCallerScene: function() {

        // Get a new caller
        game.currentCaller = game.getRandomCaller()

        let call = game.currentCaller

        game.showScreen(screens.CALLER_DIALOG)

        // Get the text elements
        // Since this is specific to this function, no need to store in HTMLElements
        const prompt = document.querySelector("#interactiveBox .prompt")
        const optionBox = document.querySelector("#interactiveBox .option-box")
        const callerDescription = document.querySelector("#callerDescriptionBox")

        // Display the caller and their message 
        callerDescription.innerHTML = call['caller']
        prompt.innerHTML = call['call']

        // Remove options (if exists)
        while (optionBox.hasChildNodes()) {
            optionBox.removeChild(optionBox.firstChild)
        }

        // Display all options with corresponding description
        let dj_response_options = call['options']
        
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
                caller = call['caller']
                caller_response = call[dj_response_type + '-response']
                
                // GAME ENDING LOGIC: Add points based on the DJ response
                if(dj_response_type == "empathetic") {
                    game.djResponsePoints.empathy++
                } else if (dj_response_type == "practical") {
                    game.djResponsePoints.practicality++
                } else if(dj_response_type == "honest") { 
                    game.djResponsePoints.honesty++
                }

                game.currentCaller["response"] = caller_response

                game.numCallersBeforeNextSong--
                game.listOfCallers.push(game.currentCaller["call-id"])
                game.setGameStatus(GAME_STATUS.DJ_RESPONSED)
                game.showNextScene()
            })

            optionBox.appendChild(option)
        }
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

        game.hideScreens()

        var screen = document.getElementById(id)

        screen.style.display = "block"
    },

    // TODO: (Medium) Add as a game STATUS
    choosing_music: false,

    /***** Functions related to choosing music *****/

    musicEnded: function() {
        alert("Song ended")

        game.resetPlayPauseButton()

    },

    // Shows the UI for choosing music and game logic related to music
    chooseMusic: function() {
        game.showScreen("chooseMusicScreen")
        // TODO: (Low) Refactor this.
        game.resetPlayPauseButton()
    },

    // Play the song and hides the Choose Music dialog
    broadcastSong: function(e) {

        // Disables the button (Song can only be played once throughout the game)
        e.currentTarget.setAttribute('disabled', '')

        // Play the track with the corresponding song_id
        let track_number = e.currentTarget.getAttribute('track-number')

        // Only play a new song if the song is not the same as the one playing
        if (!(game.currentSongPlayingTrackNumber == track_number)) {
            game.playSong(track_number)

            game.resetPlayPauseButton()
        }

        game.setGameStatus(GAME_STATUS.BROADCASTING_MUSIC)
        game.showNextScene()
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

    stopCurrentSong: function() {

        if(loader.loadedAudio) {
            loader.loadedAudio.pause()
            loader.loadedAudio.currentTime = 0;
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

    showContemplate: function() {
        // Disable the contemplate and take call buttons
        game.HTMLElements["contemplateButton"].setAttribute('disabled', '')
        game.HTMLElements["takeCallButton"].setAttribute('disabled', '')

        // Enable the take call button after 5 seconds
        setTimeout(function(){
            game.HTMLElements["takeCallButton"].removeAttribute('disabled')
        }, 5000)
    },

    takeCall: function() {
        game.setGameStatus(GAME_STATUS.ON_CALL_BROADCASTED_MUSIC)
        game.showNextScene()
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

        return call_stories[randomCallerID]
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

        game.showScreen("endingScreen")

        game.checkEndingType()

        /* // TODO: (Medium) This did not work so using a different HTML element
        game.currentScriptDialog = ending_script[game.endingType]['messages']
        game.showDialogScene(DIALOG_SCENES.END_MESSAGE) */

        let messages = ending_script[game.endingType]['messages']
        let message_num = 0

        game.HTMLElements["monolougeMessage"].innerHTML = messages[message_num]

        console.log("FINAL MESSAGE", messages)
        game.HTMLElements["finalMessageNextButton"].addEventListener('click', function() { 
            
            game.HTMLElements["monolougeMessage"].innerHTML = messages[message_num]
            message_num++;

              console.log("CLICKED", message_num, " of ", messages.length)
            if (message_num > messages.length) {
                // Reached the end of the monologue
                game.showCredits()
            } else if (message_num > messages.length - 1) {
                
                game.HTMLElements["endingScreen"].classList.remove("default-end-game-background")
                

                game.HTMLElements["monolougeContainerBox"].style.display = 'none'

                // Remove the dialog temporarily
                setTimeout(function(){
                    game.HTMLElements["monolougeContainerBox"].style.display = 'block'
                }, 5000)

                // Stop the music
                // TODO: (High) Play the crashing sound of the meteor
                

                let meteorCrashing = new Audio()
                meteorCrashing.src = "_music/sounds/end-crash.mp3"
                meteorCrashing.play()
                
                // Create a new audio for the sound effect

                // TODO: (High) For credits, play the song that wasn't chosen by the player (If played all four)
                // If no song were played throughout game, play static noise all throughout the credits
                // If player only played one song, play that song
                // If payer skipped some songs, play the last song they chose
            }

            
        })


    },

    showCredits: function() {
        game.init()
    },

    renameInScript: function(person_name, script) {
        return utils.replaceAll(script, "[Caller_Name]", person_name)
    },

    // TODO: (Low)
    // Unlike renameCallerInScript()
    // This function renames the DJ name for all the scripts
    renameDJInScript: function(dj_name, scripts) {  
        let game_scripts = game.scenesScript[0]
        // Accessing script for each scene
        
    }
}

var loader = {
    loadded: true,
    loadedCount: 0,     // Assets that have been loaded so far
    totalCount: 0,      // Total number of assets that need loading
    loadedAudio: null,
    loadedGameSongs: [],
    firstLoaderDate: null,
    fakeProgressTime: 1000, // milliseconds
    init: function() {  

        // Initialise the loader date to compare for loading progress
        loader.firstLoaderDate = new Date()

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

        // Load Meteor Crash Sound Effect

        loader.loadedAudio = loader.loadSound("_music/sounds/end-crash")

        
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
                game.gameLoaded()
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

    escapeRegExp: function(str) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
    },

    replaceAll: function(str, find, replace){
        let new_string = str

        if (typeof str === 'string' || str instanceof String ) {
            new_string = str.replace(new RegExp(utils.escapeRegExp(find), 'g'), replace);
        } else if (str.constructor === Array) {
            new_string = []

            for(let i = 0; i < str.length; i++) {
                new_string.push(str[i].replace(new RegExp(utils.escapeRegExp(find), 'g'), replace))
            }
        }
        return new_string
    },
    sample: function(arr){
        return arr[Math.floor(Math.random()*arr.length)];
      }
}

// Initialise game once page has fully loaded
window.addEventListener("load", function() {

    // Disable right-click
    const gameElement = document.getElementById("game")
    //gameElement.addEventListener('contextmenu', event => event.preventDefault());

    game.init()
})

