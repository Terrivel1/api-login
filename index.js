const dotenv = require("dotenv")
const connectToDatabase = require("./src/databases/connect.js")
const Usermodel = require("./src/databases/model/UserModel.js");
const User = require("./modules/user.js")



dotenv.config();
connectToDatabase()
require("./modules/express.js")




//Requerindo a criação do usuário

//this.user = new User("Ana", "12", "aninha91@gmail.com", "password13")