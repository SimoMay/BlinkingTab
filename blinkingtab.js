/**
 * Created by Mohamed Ahmed Fouad on 10/14/14.
 */

(function () {
    if (typeof BlinkingTab === 'undefined') {
        BlinkingTab = function (options) {
            // Define option defaults
            var defaults = {
                autoStart: true, // set it to false if you don't want to autoStart the plugin (for example if you wish to activate the functionality later)

                titleBlink_1: 'NEW TITLE -- NEW TITLE', // the first title will that show when blinking
                titleBlink_2: '****', // the second title that will show when blinking

                titleWhenTabActive: document.title, // [require revertToPreviousTitle: true] the title that will set when the user come back to your website again
                revertToPreviousTitle: false, // set it to true if you wish to revert to another title when the user come back to your website again

                delayBeforeBlinkingSeconds: 2, // [require blinkTitle: true] How much time (in seconds) before the title start blinking
                blinkIntervalSeconds: 0.5, // [require blinkTitle: true] Interval of blinking between the first title (titleBlink_1) & the second (titleBlink_2)
                blinkTitle: true, // True: will blink the title | False: will simply replace the title with titleBlink_1 when the user is inactive

                redirectWhenActive: false, // set it to true if you wish to redirect your visitors to another URL when they return to your website
                redirectURL: 'http://www.google.com', // [require redirectWhenActive: true] the redirection URL

                animateTitle: true // coming soon
            };

            // Create global variables
            BlinkingTab.tabVisible = true; // variable to keep track of the visibility of the tab
            BlinkingTab.timer = null; // the timer for the delayBeforeBlinkingSeconds
            BlinkingTab.blinkInterval = null; // the timer for the blinker
            BlinkingTab.blinkOn = true; // variable to keep track of the status of the blinker
            BlinkingTab.titleChanged = false; // variable to check the status of the title whether is already been changed or not

            // Create options by extending defaults with the passed in arguments
            BlinkingTab.settings = BlinkingTab.extendDefaults(defaults, options);

            // Set the name of the hidden property and the change event for visibility
            var hidden, visibilityChange;
            if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support
                hidden = "hidden";
                visibilityChange = "visibilitychange";
            } else if (typeof document.mozHidden !== "undefined") {
                hidden = "mozHidden";
                visibilityChange = "mozvisibilitychange";
            } else if (typeof document.msHidden !== "undefined") {
                hidden = "msHidden";
                visibilityChange = "msvisibilitychange";
            } else if (typeof document.webkitHidden !== "undefined") {
                hidden = "webkitHidden";
                visibilityChange = "webkitvisibilitychange";
            }
            BlinkingTab.settings.visibilityChange = visibilityChange;
            BlinkingTab.settings.hidden = hidden;

            // start automatically when instantiated
            if (BlinkingTab.settings.autoStart === true) BlinkingTab.start();
        };
    }

    if (typeof BlinkingTab.start === 'undefined') {
        BlinkingTab.start = function () {
            // Warn if the browser doesn't support addEventListener or the Page Visibility API
            if (typeof document.addEventListener === "undefined" ||
                typeof document[BlinkingTab.settings.hidden] === "undefined") {
                console.log("This demo requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.");
            } else {
                // Initialize our event listeners
                BlinkingTab.initializeEvents.call();
            }
        }
    }

    // Initialize our event listeners
    if (typeof BlinkingTab.initializeEvents === 'undefined') {
        BlinkingTab.initializeEvents = function () {
            // Event to detect visibility change
            document.addEventListener(BlinkingTab.settings.visibilityChange, BlinkingTab.handleVisibilityChange, false);
        };
    }

    // Handle page visibility change
    if (typeof BlinkingTab.handleVisibilityChange === 'undefined') {
        BlinkingTab.handleVisibilityChange = function () {
            // Check the current situation of the tab visibility
            if (document[BlinkingTab.settings.hidden]) {
                // the Tab is inactive (not visible)
                BlinkingTab.tabVisible = false;
                // Set a timer with delayBeforeBlinkingSeconds, so when it's over we blink the title
                BlinkingTab.timer = setTimeout(function () {
                    // When the time is over we check if the tab is still inactive
                    if (!BlinkingTab.tabVisible) {
                        // check if we want to blink the title or not
                        if (BlinkingTab.settings.blinkTitle)
                        // set timer with blinkIntervalSeconds to call blinkTitleFunction()
                            BlinkingTab.blinkInterval = setInterval("BlinkingTab.blinkTitleFunction()", 1000 * BlinkingTab.blinkIntervalSeconds);
                        else
                            document.title = BlinkingTab.settings.titleBlink_1; // When we don't want to blink the title, we put only the first blink title

                        BlinkingTab.titleChanged = true; // set this variable so we can test it later when check for redirection
                    }

                }, 1000 * BlinkingTab.settings.delayBeforeBlinkingSeconds);
            } else {
                // the Tab is active (visible)
                BlinkingTab.tabVisible = true;

                // clear the timer to save memory
                if (BlinkingTab.timer) clearTimeout(BlinkingTab.timer);
                if (BlinkingTab.blinkInterval) clearInterval(BlinkingTab.blinkInterval);

                // check if we want to revert to previous title or not
                if (BlinkingTab.settings.revertToPreviousTitle)
                    document.title = BlinkingTab.settings.titleWhenTabActive;
                else
                    document.title = BlinkingTab.settings.titleBlink_1;

                // check if we ever changed the title so we can proceed with the redirection process
                if (BlinkingTab.titleChanged) {
                    if (BlinkingTab.settings.redirectWhenActive) // check if we want to redirect the visitor
                        window.location = BlinkingTab.settings.redirectURL; // redirect the visitor
                }
            }
        }
    }

    if (typeof BlinkingTab.blinkTitleFunction === 'undefined') {
        BlinkingTab.blinkTitleFunction = function () {
            if (BlinkingTab.blinkOn) {
                document.title = BlinkingTab.settings.titleBlink_1;
                BlinkingTab.blinkOn = false;
            }
            else {
                document.title = BlinkingTab.settings.titleBlink_2;
                BlinkingTab.blinkOn = true;
            }
        }
    }

    // Utility method to extend defaults with user options
    if (typeof BlinkingTab.extendDefaults === 'undefined') {
        BlinkingTab.extendDefaults = function (source, properties) {
            var property;
            for (property in properties) {
                if (properties.hasOwnProperty(property)) {
                    source[property] = properties[property];
                }
            }
            return source;
        }
    }

})();