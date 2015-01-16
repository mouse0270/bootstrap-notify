/* 
* Project: Bootstrap Growl = v3.0.0b
* Description: Turns standard Bootstrap alerts into "Growl-like" notifications.
* Author: Mouse0270 aka Robert McIntosh
* License: MIT License
* Website: https://github.com/mouse0270/bootstrap-growl
*/
;(function ( $, window, document, undefined ) {
	// Create the defaults once
	var pluginName = "growl",
		defaults = {
			element: 'body',
			position: null,
			type: "info",
			allow_dismiss: true,
			placement: {
				from: "top",
				align: "right"
			},
			offset: 20,
			spacing: 10,
			z_index: 1031,
			delay: 5000,
			timer: 1000,
			animate: {
				enter: 'animated fadeInDown',
				exit: 'animated fadeOutUp'
			},
			onShow: null,
			onShown: null,
			onHide: null,
			onHidden: null,
			icon_type: 'class',
			template: '<div data-growl="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert"><button type="button" aria-hidden="true" class="close" data-growl="dismiss">&times;</button><span data-growl="icon"></span><span data-growl="title">{1}</span><span data-growl="message">{2}</span><div class="progress"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;"><span class="sr-only">60% Complete</span></div></div><a href="{3}" target="{4}" data-growl="url"></a></div>'
		};

	//'<div data-growl="container" class="col-xs-11 col-sm-3 {0}" role="alert"><button type="button" aria-hidden="true" class="close" data-growl="dismiss">&times;</button><span data-growl="icon"></span><span data-growl="title">{1}</span><span data-growl="message">{2}</span><a href="{3}" target="{4}" data-growl="url"></a></div>'

	String.format = function() {
		var str = arguments[0];
		for (var i = 1; i < arguments.length; i++) {
			str = str.replace(RegExp("\\{" + (i - 1) + "\\}", "gm"), arguments[i]);
		}
		return str;
	};

	function Growl ( element, content, options ) {
		// Setup Content of Growl
		var content = {
			content: {
				message: typeof content == 'object' ? content.message : content,
				title: content.title ? content.title : '',
				icon: content.icon ? content.icon : '',
				url: content.url ? content.url : '#',
				target: content.target ? content.target : '_blank'
			}
		};
		options = $.extend(true, {}, content, options);
		this.settings = $.extend(true, {}, defaults, options);
		this._defaults = defaults;
		this.animations = {
			start: 'webkitAnimationStart oanimationstart MSAnimationStart animationstart',
			end: 'webkitAnimationEnd oanimationend MSAnimationEnd animationend'
		}

		if (typeof this.settings.offset == 'number') {
		    this.settings.offset = {
		    	x: this.settings.offset,
		    	y: this.settings.offset
		    };
		}

		this.init();
	};

	$.extend(Growl.prototype, {
		init: function () {
			this.buildGrowl();
			if (this.settings.content.icon) {
				this.setIcon();
			}
			if (this.settings.content.url != "#") {
				this.styleURL();
			}
			this.placement();
			this.bind();
		},
		buildGrowl: function () {
			var content = this.settings.content;
			this.$ele = $(String.format(this.settings.template, this.settings.type, content.title, content.message, content.url, content.target));
			this.$ele.attr('data-growl-position', this.settings.placement.from + '-' + this.settings.placement.align);		
			if (!this.settings.allow_dismiss) {
				this.$ele.find('[data-growl="dismiss"]').css('display', 'none');
			}
		},
		setIcon: function() {
			if (this.settings.icon_type.toLowerCase() == 'class') {
				this.$ele.find('[data-growl="icon"]').addClass(this.settings.content.icon);
			}else{
				if (this.$ele.find('[data-growl="icon"]').is('img')) {
					this.$ele.find('[data-growl="icon"]').attr('src', this.settings.content.icon);
				}else{
					this.$ele.find('[data-growl="icon"]').append('<img src="'+this.settings.content.icon+'" alt="Growl Icon" />');
				}	
			}
		},
		styleURL: function() {
			this.$ele.find('[data-growl="url"]').css({
				height: '100%',
				left: '0px',
				position: 'absolute',
				top: '0px',
				width: '100%',
				zIndex: this.settings.z_index + 1
			});
		},
		placement: function() {
			var self = this,
				offsetAmt = this.settings.offset.y,
				css = {
					display: 'inline-block',
					margin: '0px auto',
					position: this.settings.position ?  this.settings.position : (this.settings.element === 'body' ? 'fixed' : 'absolute'),
					transition: 'all .5s ease-in-out',
					zIndex: this.settings.z_index
				},
				hasAnimation = false,
				settingsa = this.settings;

			$('[data-growl-position="' + this.settings.placement.from + '-' + this.settings.placement.align + '"]').each(function() {
				return offsetAmt = Math.max(offsetAmt, parseInt($(this).css(settingsa.placement.from)) + $(this).outerHeight() + settingsa.spacing);
			});
			css[this.settings.placement.from] = offsetAmt+'px';

			switch (this.settings.placement.align) {
				case "left":
				case "right":
					css[this.settings.placement.align] = this.settings.offset.x+'px';
					break;
				case "center":
					css.left = 0;
					css.right = 0;
					break;
			}
			this.$ele.css(css).addClass(this.settings.animate.enter);

			$(this.settings.element).append(this.$ele);
			
			if ($.isFunction(self.settings.onShow)) {
				self.settings.onShow.call(this.$ele);
			}

			this.$ele.one(this.animations.start, function(event) {
				hasAnimation = true;
			}).one(this.animations.end, function(event) {
				if ($.isFunction(self.settings.onShown)) {
					self.settings.onShown.call(this);
				}
			});

			setTimeout(function() {
				if (!hasAnimation) {
					if ($.isFunction(self.settings.onShown)) {
						self.settings.onShown.call(this);
					}
				}
			}, 600);
		},
		bind: function() {
			var self = this;

			this.$ele.find('[data-growl="dismiss"]').on('click', function() {				
				self.close();
			})

			this.$ele.mouseover(function(e) {
				$(this).data('data-hover', "true");
			}).mouseout(function(e) {
				$(this).data('data-hover', "false");
			});

			if (this.settings.delay > 0) {
				self.$ele.data('growl-delay', self.settings.delay);
				var timer = setInterval(function() {
					var delay = parseInt(self.$ele.data('growl-delay')) - self.settings.timer;
					if ((!self.$ele.data('data-hover') == "true" && self.settings.mouse_over == "pause") || self.settings.mouse_over != "pause") {
						self.$ele.data('growl-delay', delay);
						self.$ele.find('.progress-bar').css('width', (((self.settings.delay - delay) / self.settings.delay) * 100) + '%');
					}
					if (delay <= 0) {
						clearInterval(timer);
						self.close();
					}
				}, self.settings.timer);
			}
		},
		close: function() {
			var self = this,
				$successors = null,
				posX = this.$ele.css(this.settings.placement.from),
				hasAnimation = false,
				adjustSuccessor = function() {
					$successors.each(function() {
						$(this).css(self.settings.placement.from, posX);
						posX = (parseInt(posX)+(self.settings.spacing)) + $(this).outerHeight();
					});
				};

			this.$ele.addClass(this.settings.animate.exit);

			$successors = this.$ele.nextAll('[data-growl-position="' + this.settings.placement.from + '-' + this.settings.placement.align + '"]');
			
			if ($.isFunction(self.settings.onHide)) {
				self.settings.onHide.call(this.$ele);
			}

			this.$ele.one(this.animations.start, function(event) {
				hasAnimation = true;
			}).one(this.animations.end, function(event) {
				$(this).remove();
				adjustSuccessor();
				if ($.isFunction(self.settings.onHidden)) {
					self.settings.onHidden.call(this);
				}
			});

			setTimeout(function() {
				if (!hasAnimation) {
					this.$ele.remove();
					adjustSuccessor();
					if (this.settings.onHidden) {
						this.settings.onHidden(self.$ele);
					}
				}
			}, 600);
		}
	});

	$.growl = function ( content, options ) {
		
		if (content == false && options.command == "closeAll") {
			if (options.command == "closeAll") {
				//closeAll(options.position);
			}else{
				//setDefaults(this, options);
			}
			return false;
		}else{
			var plugin = new Growl( this, content, options );
			return plugin.$ele;
		}
	};

})( jQuery, window, document );