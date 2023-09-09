import { RequestHandler } from "express";
import { MetadataKeys } from "../type.ts/MetadataKeyd";
export function use(middware:RequestHandler) {
  return function (target:any,key:string) {
    const middwares = Reflect.getMetadata(MetadataKeys.middware,target,key) ||[]
    middwares.push(middware)
    Reflect.defineMetadata(MetadataKeys.middware,middwares,target,key)
  }
}