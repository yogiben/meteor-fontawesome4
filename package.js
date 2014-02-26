Package.describe({
  "summary": "Scalable vector icons that can be customized with the power of CSS."
});

Package.on_use(function (api) {

  api.add_files("lib/fonts/fontawesome-webfont.eot", "client");
  api.add_files("lib/fonts/fontawesome-webfont.svg", "client");
  api.add_files("lib/fonts/fontawesome-webfont.ttf", "client");
  api.add_files("lib/fonts/fontawesome-webfont.woff", "client");
  api.add_files("lib/fonts/FontAwesome.otf", "client");
  
  api.add_files("lib/css/font-awesome.min.css", "client");
  api.add_files("font-awesome-overrides.css", "client");
  
});