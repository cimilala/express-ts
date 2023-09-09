"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
require("reflect-metadata");
const AppRouter_1 = require("../AppRouter");
const Methods_1 = require("../type.ts/Methods");
const MetadataKeyd_1 = require("../type.ts/MetadataKeyd");
function bodyvali(keys) {
    return function (req, res, next) {
        if (!req.body) {
            res.send("无效");
        }
        for (const key of keys) {
            if (!req.body[key])
                res.send("无效");
        }
        next();
    };
}
function controller(routePrefix = "") {
    return function (target) {
        const router = AppRouter_1.AppRouter.Instance;
        let o = target.prototype;
        Object.getOwnPropertyNames(o).forEach((key) => {
            if (key === "constructor")
                return;
            const path = Reflect.getMetadata(MetadataKeyd_1.MetadataKeys.path, o, key) || "";
            const method = Reflect.getMetadata(MetadataKeyd_1.MetadataKeys.method, o, key) || Methods_1.Methods.get;
            const middwares = Reflect.getMetadata(MetadataKeyd_1.MetadataKeys.middware, o, key);
            const bodyKeys = Reflect.getMetadata(MetadataKeyd_1.MetadataKeys.valitador, o, key);
            const a = bodyvali(bodyKeys);
            router[method](`${routePrefix}${path}`, ...(middwares || []), a, o[key]);
        });
    };
}
exports.controller = controller;
