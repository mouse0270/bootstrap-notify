# Bootstrap Growl
This is a simple pluging that turns standard Bootstrap alerts into "Growl-like" notifications.


## Bower Officially Supported
I would like to thank [Błażej Krysiak](https://github.com/IjinPL) for doing this!
```
bower install bootstrap.growl 
```

## Changelog
##### Version 1.0.6
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
- [Bootstrap v3.0.3](http://getbootstrap.com/)


## Usage
```javascript
$.growl('This is a basic growl! Quick and simple');

$.growl( { 
  title: 'I have a title', 
  icon: 'glyphicon glyphicon-info-sign', 
  message: 'This growl contains both a Title and a Icon'  
});

$.growl( { 
  title: 'I have a title',  
  message: 'This growl contains both a Title and a Icon',  
});

$.growl('This is an Informational Notification!', { type: 'info' });
$.growl('This is an Successful Notification!', { type: 'success' });
$.growl('This is an Warning Notification!', { type: 'warning' });
$.growl('This is an Danger Notification!', { type: 'danger' });

// Version 1.0.4 //
// Create growl and assign return to variable //
var $growl = $.growl('This is a basic growl! That will not close automatically', { delay: 0 } );

// Create Timeout to close growl since delay is set to 0 //
setTimeout(function() {
	$growl.alert('close');
}, 1000);

// Alert User when Growl is Closing //
$.growl('This Growl will alert the user that it is closing!', { 
	onGrowlClose: function() {
		alert('I am Closing');
	}
});

// Alert User when Growl is Closed //
$.growl('This Growl will alert the user after it has been closed!', { 
	onGrowlClosed: function() {
		alert('I am Closed');
	}
});

// Version 1.0.6 //
// Alert User when Growl is Fading In //
$.growl('This Growl will alert the user as soon as it starts to fade in', { 
	onGrowlShow: function() {
		alert('I am Fading In');
	}
});
// Alert User when Growl has Faded In //
$.growl('This Growl will alert the user after it has completely faded in', { 
	onGrowlShown: function() {
		alert('I have Fading In');
	}
});

```

## Options
```javascript
$.growl.default_options = {
	ele: "body",
	type: "info",
	allow_dismiss: true,
	position: {
		from: "top",
		align: "right"
	},
	offset: 20,
	spacing: 10,
	z_index: 1031,
	fade_in: 400,
	delay: 5000,
	pause_on_mouseover: false,
	onGrowlShow: null,
	onGrowlShown: null,
	onGrowlClose: null,
	onGrowlClosed: null,
	template: {
		icon_type: 'class',
		container: '<div class="col-xs-10 col-sm-10 col-md-3 alert">',
		dismiss: '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>',
		title: '<strong>',
		title_divider: '',
		message: ''
	}
};
```

## Shout Out's
- [Bootstrap Growl](https://github.com/ifightcrime/bootstrap-growl)
- [Jose Martinez](https://github.com/callado4)
- [Lloyd Watkin](https://github.com/lloydwatkin)
- [TruongSinh Tran-Nguyen](https://github.com/tran-nguyen)

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
