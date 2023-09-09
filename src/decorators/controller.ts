import "reflect-metadata";
import { AppRouter } from "../AppRouter";
import { Methods } from "../type.ts/Methods";
import { MetadataKeys } from "../type.ts/MetadataKeyd";
import { NextFunction, Request, Response } from "express";
function bodyvali(keys:string[]) {
  return function (req:Request,res:Response,next:NextFunction) {
    if(!req.body) {
      res.send("无效")
    }
    for (const key of keys) {
      if(!req.body[key])res.send("无效")
    }
  next()
  }
}
function controller(routePrefix="") {
  return function (target: Function) {
    const router = AppRouter.Instance;
    let o = target.prototype;
    Object.getOwnPropertyNames(o).forEach((key: string) => {
      if (key === "constructor") return;
      const path = Reflect.getMetadata(MetadataKeys.path, o, key)||"";
      const method: Methods = Reflect.getMetadata(MetadataKeys.method, o, key)||Methods.get;
      const middwares= Reflect.getMetadata(MetadataKeys.middware, o, key);
      const bodyKeys = Reflect.getMetadata(MetadataKeys.valitador,o,key)
    const a =  bodyvali(bodyKeys)
        router[method](`${routePrefix}${path}`,...(middwares||[]),a, o[key]);
    
      
       
      
    });
  };
}

export { controller };
