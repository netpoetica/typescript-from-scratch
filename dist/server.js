(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "http", "fs"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var http_1 = require("http");
    var fs_1 = require("fs");
    var server = http_1.createServer(function (req, res) {
        switch (req.url) {
            case '/':
                fs_1.readFile('client/index.html', function (err, data) {
                    res.setHeader('Content-Type', 'text/html');
                    res.end(data);
                });
                break;
            case '/scripts/main.js':
                fs_1.readFile('dist/client/scripts/main.js', function (err, data) {
                    res.setHeader('Content-Type', 'text/javascript');
                    res.end(data);
                });
                break;
        }
    });
    server.listen(8000, function () {
        console.log('Listening...');
    });
});
//# sourceMappingURL=server.js.map