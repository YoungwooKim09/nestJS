"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cats_route_1 = require("./cats/cats.route");
var Server = (function () {
    function Server() {
        var app = express();
        this.app = app;
    }
    Server.prototype.setRoute = function () {
        this.app.use(cats_route_1.default);
    };
    Server.prototype.setMiddleware = function () {
        this.app.use(function (req, res, next) {
            console.log(req.rawHeaders[1]);
            console.log("this is logging middleware");
            next();
        });
        this.app.use(express.json());
        this.setRoute();
        this.app.use(function (req, res, next) {
            console.log("this is 404 middleware");
            res.send({ error: "404 Not Found" });
        });
    };
    Server.prototype.listen = function () {
        this.app.listen(8000, function () {
            console.log("Server is on...");
        });
    };
    return Server;
}());
var app = express();
//# sourceMappingURL=app.js.map