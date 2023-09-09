import "reflect-metadata"
import { Methods } from "../type.ts/Methods"
import { MetadataKeys } from "../type.ts/MetadataKeyd"
function routeBinder(method:string) {
  return function (path:string) {
    return function (target:any,key:string) {
     Reflect.defineMetadata(MetadataKeys.method,method,target,key)
     Reflect.defineMetadata(MetadataKeys.path,path,target,key)
    }
   }
}
export const post = routeBinder(Methods.post)
export const get = routeBinder(Methods.get)
export const patch = routeBinder(Methods.patch)
export const put = routeBinder(Methods.put)
export const del = routeBinder(Methods.delete)


