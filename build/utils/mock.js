"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mockjs_1 = __importDefault(require("mockjs"));
let data = mockjs_1.default.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|20': [{
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            'name': "@cname",
            "age": "@natural(10,30)"
        }]
});
// 输出结果
exports.default = data;
