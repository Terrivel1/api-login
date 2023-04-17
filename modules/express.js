const express = require("express")
const Usermodel = require("../src/databases/model/UserModel.js");
const User = require("./user.js")


const app = express()
const port = 5050;
app.use(express.json())


app.get("/", (req, res) => {
  res.status(200).send("<h4>Olá mundo!</h4>")
})
app.get("/users", async (req, res) => {
 try {
  const users = await Usermodel.find({})
 //console.log(users)
  res.status(200).send(users)
 } catch (err) {
   console.log("Um erro ocorreu")
 }         
})
app.get("/createUser", async (req, res) => {
if (res.status(200)) {
  const user = new User("Ana", "12", "aninha91@gmail.com", "password13")
    
const os = await Usermodel.findOne({email: "aninha91@gmail.com"}, "firstName age")
await res.status(200).send(`${os}`)
}
})
app.listen(port, () => console.log(`Rodando na porta ${port}`))