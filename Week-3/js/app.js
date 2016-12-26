requirejs.config({
    "baseUrl": "js/app",
    "paths": {
        "jquery": "../vendors/jquery.min",
        "bootstrap": "../vendors/bootstrap.min"
    },
    "shim": {
        "bootstrap": ["jquery"]
    }
});

require(['main']);
