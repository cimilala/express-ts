import UserService from "../service/user.service"
import { Request,Response } from "express"
import { post } from "../decorators/routes"
import {controller} from "../decorators/controller"
import { use } from "../decorators/use"
import { logger } from "../middwares/logger"
import { bodyValitador } from "../decorators/bodyValitador"
let userService = new UserService()

@controller()
class UserController {
  @bodyValitador("username","password")
  @post("/user")
  async login(req:Request,res:Response) {
    res.send(await userService.login())
  }
  @post("/inseartMany")
  async insertMany(req:Request,res:Response) {
    res.send(await userService.insertMany()) 
   }
   @use(logger)
   @post("/find")
   async find(req:Request,res:Response) {
    res.send(await userService.find(req.body)) 
  }
}
export default UserController
