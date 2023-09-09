"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//1.倒入express
const path_1 = __importDefault(require("path"));
const mongoose_1 = __importDefault(require("mongoose"));
const express_1 = __importDefault(require("express"));
const AppRouter_1 = require("./AppRouter");
require("./controllers/user.controller");
mongoose_1.default.connect('mongodb://localhost:27017/test')
    .then(() => console.log('Connected!'))
    .catch((error) => console.log(error));
;
//2.创建web服务器
const app = (0, express_1.default)();
// app.use(express.static("../build"))
app.use(express_1.default.static(path_1.default.join(__dirname, "..", "public")));
// app.use(express.urlencoded({extended:true}))
app.use(express_1.default.json()); //处理传过来的json数据并转换为js对象
app.use(express_1.default.urlencoded({ extended: true }));
app.use(AppRouter_1.AppRouter.Instance);
//4.监听客户端的GET和POST请求，并向客户端响应具体内容 
//3.启动web服务器
app.listen(8080, () => {
    console.log('express server running at http://127.0.0.1');
});
