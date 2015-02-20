var packageJson = JSON.parse(Npm.require("fs").readFileSync('package.json'));
var packageName = 'mouse0270:bootstrap-notify';
var where = 'client';

Package.describe({
  git: 'https://github.com/mouse0270/bootstrap-notify',
  name: packageName,
  summary: 'Turns standard Bootstrap alerts into "Growl-like" notifications',
  version: packageJson.version,
});

Package.onUse(function (api) {
  api.versionsFrom('1.0');
  api.use('jquery', where);
  api.addFiles('bootstrap-notify.js', where);
});

Package.onTest(function (api) {
  api.use(packageName, where);
  api.use('tinytest', where);

  api.addFiles('meteor/test.js', where);
});
