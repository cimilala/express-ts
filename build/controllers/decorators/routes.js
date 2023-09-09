"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.del = exports.put = exports.patch = exports.get = exports.post = void 0;
require("reflect-metadata");
const Methods_1 = require("../type.ts/Methods");
const MetadataKeyd_1 = require("../type.ts/MetadataKeyd");
function routeBinder(method) {
    return function (path) {
        return function (target, key) {
            Reflect.defineMetadata(MetadataKeyd_1.MetadataKeys.method, method, target, key);
            Reflect.defineMetadata(MetadataKeyd_1.MetadataKeys.path, path, target, key);
        };
    };
}
exports.post = routeBinder(Methods_1.Methods.post);
exports.get = routeBinder(Methods_1.Methods.get);
exports.patch = routeBinder(Methods_1.Methods.patch);
exports.put = routeBinder(Methods_1.Methods.put);
exports.del = routeBinder(Methods_1.Methods.delete);
