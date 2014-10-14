BlinkingTab
=========

BlinkingTab is a Javascript plugin allow you to bring visitors back to your site by blinking the tab title.

  - Easy to setup
  - Bring back visitors to you website (== Money ==)
  - Doesn't need JQuery to work
  - Actually it doesn't require any other plugins
  - Many options to play with...
  - Open source & under MIT License :)


Installation
--------------

Download *blinkingtab.js* file to your website's root path and then add the script at the bottom of the page you wish to activate the Blinking Tab to, before the *< /body>* tag:

```html
...
<script src="blinkingtab.js" type="application/javascript"></script>
<script> BlinkingTab(); </script>
</body>
```

That's it :D

Usage
--------------

In order to set configuration to the plugin you can define one/many of the variables (mentioned below) inside the **BlinkingTab()**, for example:


```html
<script> BlinkingTab({
    titleBlink_1: '-- NEW TITLE -- ',
    delayBeforeBlinkingSeconds: 5, 
    ...
}); </script>
```

Configuration
--------------

Here's a list of the variables you can define:

> **autoStart** : (true|false) by default it's set to true, set it to false if you don't want to autoStart the plugin (for example if you wish to activate the functionality later by calling *BlinkingTab.start();*)

> **titleBlink_1** : (string) the first title that will be seen when blinking the tab title

> **titleBlink_2** : (string) the second title that will be seen when blinking the tab title

> **titleWhenTabActive** : (string) by default it takes the current title of the page, the title that will set when the user come back to your website again *[require revertToPreviousTitle: true]*

> **revertToPreviousTitle** : (true|false) by default it's set false, set it to true if you wish to revert to another title when the user come back to your website again

> **delayBeforeBlinkingSeconds** : (seconds) by default it's set 2, How much time (in seconds) before the title start blinking

> **blinkIntervalSeconds** : (seconds) by default it's set 0.5, Interval of blinking between the first title (titleBlink_1) & the second (titleBlink_2)  *[require blinkTitle: true]*

> **blinkTitle** : (true|false) by default it's set true. True: will blink the title | False: will simply replace the title with titleBlink_1 when the user is inactive

> **redirectWhenActive** : (true|false) by default it's set false, set it to true if you wish to redirect your visitors to another URL when they return to your website

> **redirectURL** : (string) the redirection URL *[require redirectWhenActive: true]*

> **animateTitle** : (true|false) ... Coming soon



Tested Browsers
-----------

* Chrome 
* ... will test it in more browsers soon

Support Me
----

Please donate to me via Paypal or Flattr. 

I will graciously accept any donations, but because of the Paypal and Flattr fees, may I suggest you to give at least 5 $ or 5 euros. 
It is little bit more than a cafe but will be tremendously helpful. 

Thanks a million, greatly appreciated.

* [Paypal] - Donate via Paypal
* [Flattr] - Donate via Flattr


License
----


The MIT License (MIT)

**Free Software, Hell Yeah!**

Copyright (c) 2014 Mohamed Ahmed Fouad

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[Paypal]:https://scansfer.com/pp_post_redirect.php?p=Y3JhenlnZW50bGVtYW4xMkBnbWFpbC5jb218TW9oYW1lZCBBaG1lZCBGb3VhZHx8fFVTRHx8fE1BfF9kb25hdGlvbnM=
[Flattr]:https://flattr.com/thing/fc6cc6788a2920763a1eab648e9a4288
