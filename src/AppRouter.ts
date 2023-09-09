import {Router} from "express"
export class AppRouter {
  private static routerInstance:Router
  static get Instance() {
    if(!AppRouter.routerInstance) {
      AppRouter.routerInstance = Router()
    }
    return AppRouter.routerInstance
  }
}