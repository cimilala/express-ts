import UserModel from "../model/user.model"
import data from "../utils/mock";
export default  class UserService {
  async login() {
   return await UserModel.findOne({age:17})
  }

 async insertMany() {
   return await UserModel.insertMany(data.list)
  }
  async find(params:{name?:string,age?:number}) {
    return await UserModel.find(params);
  }
  hah() {
    console.log("Aa");
    
  }
}
