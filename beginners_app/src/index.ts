import { AppDataSource } from "./data-source.js"
import { User } from "./entity/User.js"

AppDataSource.initialize().then(async () => {

    console.log("Start creating repository")

}).catch(error => console.log(error))
