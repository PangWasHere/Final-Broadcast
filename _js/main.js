
var game = {
    listOfCallers: [],
    totalCallers: call_stories.length,
    numCallersBeforeNextSong: 3, //TODO: For Next Phase
    maxCallersEnding: 3,    //TODO: Change this to 9 when publishing
    djResponsePoints: {"honesty": 0, "empathy": 0, "practicality": 0},
    endingType: "default",
    init: function() {
        game.canvas = document.getElementById("gameCanvas")
        game.context = game.canvas.getContext("2d")

        loader.init()
        
        // Hide all game layers and display the start screen
        game.hideScreens()
        game.showScreen("chooseMusicScreen")
        //game.start()
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
        "Step forward",
        "Carry on",
        "Next step",
        "Forge ahead",
        "Push forward",
        "Resume",
        "Continue",
        "Go ahead",
        "Proceed to the next",
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
        let sceneMessage = document.querySelector("#sceneBox .message")
        sceneMessage.innerHTML = response

        const speakerBox = document.getElementById("speakerBox")
        speakerBox.innerHTML = caller

        speakerBox.style.display = 'inline-block'

        const buttonNext = document.getElementById("buttonNext")
        let randomNumber = Math.floor(Math.random() * game.nextButtonTextList.length)
        buttonNext.innerHTML = game.nextButtonTextList[randomNumber]
    },

    nextScene: function() {

        // Checks if the number of caller reached the maximum
        if (game.listOfCallers.length >= game.maxCallersEnding) {
            // TODO: End game
            game.showEndScene()
        } else {
            game.showCall(game.getRandomCaller())
        }
       
    },

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

    init: function() {
        // Check for sound support
        var mp3Support, oggSupport
        var audio = document.createElement("audio")

        if (audio.canPlayType) {
            // Currently canPlayType() returns: "", "maybe" or "probably"
            mp3Support = "" !== audio.canPlayType("audio/mpeg")
            oggSupport = "" !== audio.canPlayType("audio/ogg; codecs=\"vorbos\"")
        } else {
            // The audio tag is not supported
            mp3Support = false
            oggSupport = false
        }

        // Check for ogg, then mp3, and finally set soundFileExtn to undefined
        loader.soundFileExtn = oggSupport ? ".ogg" : mp3Support ? ".mp3" : undefined
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

        game.showScreen("loadingScreen")

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

        if (loader.loadedCount === loader.totalCount) {
            // Loader has loaded completely..
            // Reset and clear the loader
            loader.loaded = true
            loader.loadedCount = 0
            loader.totalCount = 0

            // Hide the loading screen
            game.hideScreen("loadingScreen")

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