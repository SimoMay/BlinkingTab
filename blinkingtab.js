// Create an immediately invoked functional expression to wrap our code
(function () {

    // Define our constructor
    this.BlinkingTab = function () {
        // Create global element references
        this.modal = null;

        // Define option defaults
        var defaults = {
            autoOpen: ture
        }

        // Create options by extending defaults with the passed in arugments
        if (arguments[0] && typeof arguments[0] === "object") {
            this.options = extendDefaults(defaults, arguments[0]);
        }

        // open automatically when instantiated
        if (this.options.autoOpen === true) this.open();
    }

    // Public Methods

    BlinkingTab.prototype.open = function () {
        // Warn if the browser doesn't support addEventListener or the Page Visibility API
        if (typeof document.addEventListener === "undefined" ||
            typeof document[hidden] === "undefined") {
            console.log("This demo requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.");
        } else {
            initializeEvents.call();
        }
    }

    // Private Methods

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

    // If the page is hidden, pause the video;
    // if the page is shown, play the video
    function handleVisibilityChange() {
        if (document[hidden]) {
            document.title = 'Not visible';
        } else {
            document.title = 'Visible';
        }
    }

    function initializeEvents() {

        // Handle page visibility change
        document.addEventListener(visibilityChange, handleVisibilityChange, false);

    }

    // Utility method to extend defaults with user options
    function extendDefaults(source, properties) {
        var property;
        for (property in properties) {
            if (properties.hasOwnProperty(property)) {
                source[property] = properties[property];
            }
        }
        return source;
    }

}());

