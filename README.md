# Bootstrap Growl
This is a simple pluging that turns standard Bootstrap alerts into "Growl-like" notifications.

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
```

## Options
```javascript
$.grow({ title, {
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
		template: {
			icon_type: 'class',
			container: '<div class="col-xs-10 col-sm-10 col-md-3 alert">',
			dismiss: '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>',
			title: '<strong>',
			title_divider: '',
			message: ''
		}
	};
});
```

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