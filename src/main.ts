//1.倒入express
import path from "path"
import mongoose from "mongoose";
import express from "express"
import { AppRouter } from "./AppRouter";
import "./controllers/user.controller"
mongoose.connect('mongodb://localhost:27017/test')
.then(() => console.log('Connected!'))
.catch((error: any) => console.log(error));;
//2.创建web服务器
const app = express()
// app.use(express.static("../build"))
app.use(express.static(path.join(__dirname,"..","public")))
// app.use(express.urlencoded({extended:true}))
app.use(express.json())//处理传过来的json数据并转换为js对象
app.use(express.urlencoded({extended:true}))
app.use(AppRouter.Instance)

//4.监听客户端的GET和POST请求，并向客户端响应具体内容 
//3.启动web服务器
app.listen(8080,() =>{
    console.log('express server running at http://127.0.0.1')
})