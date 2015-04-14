Package.describe({
	summary: "Turns standard Bootstrap alerts into \"Growl-like\" notifications.",
	version: "3.0.2",
	git: "https://github.com/mouse0270/bootstrap-notify.git",
	name: "mouse0270:bootstrap-notify"
});

Package.onUse(function(api) {
	api.versionsFrom('1.0');

	api.use([
		'jquery@1.11.0',
		'twbs:bootstrap@3.3.4'
	]);

	api.addFiles('bootstrap-notify.min.js', 'client');
});
