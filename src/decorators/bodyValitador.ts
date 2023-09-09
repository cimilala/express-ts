import { MetadataKeys } from "../type.ts/MetadataKeyd"

export function bodyValitador(...keys:string[]) {
  return function (target:any,key:string) {
    Reflect.defineMetadata(MetadataKeys.valitador,keys,target,key)
  }
}