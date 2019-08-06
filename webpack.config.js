const path = require('path');

module.exports = {
    "mode": "production",
    "entry": "./src/index.js",
    "output": {
        "path": __dirname+'/dist',
        "filename": "xapiwrapper.min.js",
        "library": 'ADL',
        "libraryTarget": 'var'
    },
    "module": {
        "rules": [
            {
                "test": /\.js$/,
                "exclude": /node_modules/,
                "use": {
                    "loader": "babel-loader",
                    "options": {
                        "presets": [
                            "@babel/preset-env"
                        ]
                    }
                }
            }
        ]
    }
};