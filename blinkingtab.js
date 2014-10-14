/**
 * Created by Mohamed on 6/23/14.
 */

(function () {
    if (typeof BlinkingTab === 'undefined') {
        BlinkingTab = function (options) {
            var defaults = {
                autoStart: true,
                titleWhenNotVisible: 'Not visible',
                titleWhenVisible: 'Visible'
            };

            BlinkingTab.settings = BlinkingTab.extendDefaults(defaults, options);

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
                BlinkingTab.initializeEvents.call();
            }
        }
    }

    if (typeof BlinkingTab.initializeEvents === 'undefined') {
        BlinkingTab.initializeEvents = function () {
            // Event to detect visibility change
            document.addEventListener(BlinkingTab.settings.visibilityChange, BlinkingTab.handleVisibilityChange, false);
        };
    }

    if (typeof BlinkingTab.handleVisibilityChange === 'undefined') {
        BlinkingTab.handleVisibilityChange = function () {
            if (document[BlinkingTab.settings.hidden]) {
                document.title = BlinkingTab.settings.titleWhenNotVisible;
            } else {
                document.title = BlinkingTab.settings.titleWhenVisible;
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