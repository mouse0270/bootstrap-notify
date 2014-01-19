;(function($, window, document, undefined) {

	var bootstrap_growl_remove = [];

	$.growl = function(content, options) {
		var message = null, 
			title = null, 
			icon = null, 
			$growl, growlClass, css, offsetAmount;

		if (Object.prototype.toString.call(content) == "[object Object]") {
			message = content.message; 
			title = " "+content.title+" "; 
			icon = content.icon; 
		}else{
			message = content;
		}

		/* ===== CORRECT MISSING OPTIONS ===== */
		if (options.position) {
			if (options.position.from === undefined) {
				options.position.from = $.growl.default_options.position.from;
			}
			if (options.position.align === undefined) {
				options.position.align = $.growl.default_options.position.align;
			}
		}
		if (options.template) {
			if (options.template.icon_type === undefined) {
				options.template.icon_type = $.growl.default_options.template.icon_type;
			}
			if (options.template.container === undefined) {
				options.template.container = $.growl.default_options.template.container;
			}
			if (options.template.dismiss === undefined) {
				options.template.dismiss = $.growl.default_options.template.dismiss;
			}
			if (options.template.title === undefined) {
				options.template.title = $.growl.default_options.template.title;
			}
		}

		options = $.extend({}, $.growl.default_options, options);

		if (options.template.icon_type === 'class') {
			options.template.icon = '<span class="">';
		}else{
			options.template.icon = '<img src="" />';
		}

		/* ===== BUILD GROWL CONTAINER ===== */
		growlClass = "bootstrap-growl-" + options.position.from + "-" + options.position.align;
		$growl = $(options.template.container); $growl.addClass(growlClass);
		if (options.type) {
			$growl.addClass("alert-" + options.type);
		} else {
			$growl.addClass("alert-info");
		}
		if (options.allow_dismiss) {
			$growl.append($(options.template.dismiss));
		}
		if (icon) {
			if (options.template.icon) {
				if (options.template.icon_type == "class") {
					$growl.append($(options.template.icon).addClass(icon));
				}else{
					$growl.append($(options.template.icon).attr('src',icon));	
				}
			}else{
				$growl.append(icon);
			}
		}
		if (title) {
			if (options.template.title) {
				$growl.append($(options.template.title).html(title));
			}else{
				$growl.append(title);
			}
			$growl.append(options.template.title_divider);
		}
		if (options.template.message) {
			$growl.append($(options.template.message).html(message));
		}else{
			$growl.append(message);
		}

		/* ===== DETERMINE GROWL POSITION ===== */
		offsetAmount = options.offset;
		$("."+growlClass).each(function() {
			return offsetAmount = Math.max(offsetAmount, parseInt($(this).css(options.position.from)) + $(this).outerHeight() + options.spacing);
		});
		css = {
			"position": (options.ele === "body" ? "fixed" : "absolute"),
			"margin": 0,
			"z-index": options.z_index,
			"display": "none"
		};
		css[options.position.from] = offsetAmount + "px";
		$growl.css(css);
		$(options.ele).append($growl);
		switch (options.position.align) {
			case "center":
				$growl.css({ 
					"left": "50%",
					"marginLeft": -($growl.outerWidth() / 2) + "px"
				});
				break;
			case "left":
				$growl.css("left", options.offset + "px");
				break;
			default:
				$growl.css("right", options.offset + "px");
		}

		/* ===== DETERMINE GROWL POSITION ===== */
		if (options.onGrowlFadeInStart != null) {
			return options.onGrowlFadeInStart;
		}
		$growl.fadeIn(options.fade_in, function() {
			if (options.onGrowlFadeInComplete != null) {
				return options.onGrowlFadeInComplete;
			}

			/* ===== HANDEL DELAY AND PAUSE ON MOUSE OVER ===== */
			if (options.delay > 0) {
				if (options.pause_on_mouseover == true) {
					$growl.on('mouseover', function() {
						clearTimeout(bootstrap_growl_remove[$growl.index()]);
					}).on('mouseleave', function() {
						bootstrap_growl_remove[$growl.index()] = setTimeout(function() {
							return $growl.alert("close");
						}, options.delay);
					});
				}

				bootstrap_growl_remove[$growl.index()] = setTimeout(function() {
					return $growl.alert("close");
				}, options.delay);
			}
		});

		$growl.bind('close.bs.alert', function () {
			if (options.onGrowlClose) {
				return options.onGrowlClose;
			}
		});

		$growl.bind('closed.bs.alert', function () {
			var pos = $(this).css(options.position.from);
			$(this).nextAll('.'+growlClass).each(function() {
				$(this).css(options.position.from , pos);
				pos = (parseInt(pos)+(options.spacing*2)) + $(this).height() + (options.spacing*2);
			});
			if (options.onGrowlClosed) {
				return options.onGrowlClosed;
			}
		});

	};

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
		onGrowlFadeInStart: null,
		onGrowlFadeInComplete: null,
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

})(jQuery, window, document);