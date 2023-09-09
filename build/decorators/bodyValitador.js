"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bodyValitador = void 0;
const MetadataKeyd_1 = require("../type.ts/MetadataKeyd");
function bodyValitador(...keys) {
    return function (target, key) {
        Reflect.defineMetadata(MetadataKeyd_1.MetadataKeys.valitador, keys, target, key);
    };
}
exports.bodyValitador = bodyValitador;
