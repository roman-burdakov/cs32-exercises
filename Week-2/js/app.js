requirejs.config({
    "baseUrl": "js",
    "paths": {
      "jquery": "vendors/jquery.min",
      "bootstrap": "vendors/bootstrap.min",
      "playlist": "Playlist",
      "playlistView": "PlaylistView"
    },
	"shim": {
        "bootstrap": ["jquery"]
    }
});

requirejs(["main"]);