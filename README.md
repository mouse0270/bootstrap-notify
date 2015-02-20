[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/mouse0270/bootstrap-growl?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
# Bootstrap Growl
This is a simple plugin that turns standard Bootstrap alerts into "Growl-like" notifications.

## Thinking of a Rename
This project orginially started out to be a pull request for [ifightcrime's](https://github.com/ifightcrime/bootstrap-growl) bootstrap growl plugin, but quickly grew into it's own plugin. This is the reason the two plugins share a name, but this has lately been causing me troubles when trying to add my plugin into cdn networks and such. I don't blame the cdn hosts for this issue it was caused by me starting with a pull request and than making my own beast. So I want to look into a rename for this project starting with version 3.0.0, If you have any suggestions please either create an issue, or emailing me by [clicking here](mailto://rmcintosh@remabledesigns.com), or on official [Gitter](https://gitter.im/mouse0270/bootstrap-growl) channel.

#### Suggested Names
- Bootstrap Notify
- Bootstrap Notification
- Bootstrap Notifier


## Official support

### Bower
```
bower install bootstrap.growl
```
Thanks to [Błażej Krysiak](https://github.com/IjinPL)

### Meteor

```
meteor add mouse0270:bootstrap-growl
```
Thanks to [Simon Fridlund](https://github.com/zimme)

## Changelog
##### Version 2.0.1
- Added the ability to set an X and Y value within the offset option
- Added callback options onShow, onShown, onHide and onHidden
- Added a close all method to close all open growls

##### [Version 2.0.0a3](http://bootstrap-growl.remabledesigns.com/2.0.0a3/)
- Fixed issue with growl not closing if there was no CSS animations

##### [Version 2.0.0a2](http://bootstrap-growl.remabledesigns.com/2.0.0a2/) (with IE8 Support)
- Changed animate.in to animate.enter for IE8 compatibility
- Changed animate.out to animate.exit for IE8 compatibility
- Modified .is(':hover') for IE8 compatibility

##### [Version 2.0.0a1](http://bootstrap-growl.remabledesigns.com/2.0.0a1/)
- Better Minification

##### [Version 2.0.0a](http://bootstrap-growl.remabledesigns.com/2.0.0a1/)
- Major rewright of the plugin file.
- Added the ability to pass the growl a link making it clickable.
- Added the ability to control the growl animations in and out using css.
- Added the ability to set growl settings globally.
- Removed jQuery fadeIn (use css to control growl animations)

##### [Version 1.0.6](http://bootstrap-growl.remabledesigns.com/1.0.6/)
- Added onGrowlShow and onGrowlShown callback functionality.

##### Version 1.0.5
- Better positioning when using CSS animations after growl closes.

##### Version 1.0.4
- Updated $.growl() to return a wrapper object with a small API to let you control individual notifications after they have been created.
- Added onGrowlClose and onGrowlClosed callback functionality.

##### Version 1.0.3
- Made jQuery $.extend() Recursive so when you change just one option under position or template the script wont fail

##### Version 1.0.2
- Fixed an issue where $.growl("message") would thrown an exception | Provided by [DannyJo](https://github.com/DannyJo/bootstrap-growl)

##### Version 1.0.0
- Initial Release

## Demo
I have created a small demo to show off some of the features that you can use with this plugin. http://bootstrap-growl.remabledesigns.com/

## Dependencies
- [jQuery v1.10.2](http://jquery.com/)
- [Bootstrap v2.0.0 - 3.2.0](http://getbootstrap.com/)


## Documentation
There is alot of documentation on the website. Click the link below to read it.
- [Documentation](http://bootstrap-growl.remabledesigns.com/#growl-documentation)

## Copyright and License
The MIT License (MIT)
Copyright (c) 2014 Robert McIntosh

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
