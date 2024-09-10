
var game = {
    init: function() {
        game.canvas = document.getElementById("gameCanvas")
        game.context = game.canvas.getContext("2d")

        loader.init()
        
        // Hide all game layers and display the start screen
        game.hideScreens()
        game.showScreen("callerDialogScreen")
        
    },

    start: function() {
        alert("Game start")
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