"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.use = void 0;
const MetadataKeyd_1 = require("../type.ts/MetadataKeyd");
function use(middware) {
    return function (target, key) {
        const middwares = Reflect.getMetadata(MetadataKeyd_1.MetadataKeys.middware, target, key) || [];
        middwares.push(middware);
        Reflect.defineMetadata(MetadataKeyd_1.MetadataKeys.middware, middwares, target, key);
    };
}
exports.use = use;
