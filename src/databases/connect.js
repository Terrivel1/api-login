const mongoose = require("mongoose")

const connectToDatabase = async () => {
  try {
await mongoose.connect(`mongodb+srv://${process.env.user}:${process.env.password}@users.po2tdd8.mongodb.net/users?retryWrites=true&w=majority`)
  console.log("Logado no banco de dados")  
  } catch {
  return console.log(`Ocorreu um erro ao tentar se conectar ao banco de dados`)
}

}
  

module.exports = connectToDatabase;