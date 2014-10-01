Package.describe({
  "summary": "Scalable vector icons that can be customized with the power of CSS.",
  "version": "4.2.2",
  "git": "https://github.com/chrismbeckett/meteor-fontawesome4.git"
});

Package.onUse(function (api) {

  api.versionsFrom('METEOR@0.9.2.1');

  api.addFiles("lib/fonts/fontawesome-webfont.eot", "client");
  api.addFiles("lib/fonts/fontawesome-webfont.svg", "client");
  api.addFiles("lib/fonts/fontawesome-webfont.ttf", "client");
  api.addFiles("lib/fonts/fontawesome-webfont.woff", "client");
  api.addFiles("lib/fonts/FontAwesome.otf", "client");

  api.addFiles("lib/css/font-awesome.css", "client");
  api.addFiles("font-awesome-overrides.css", "client");

});
