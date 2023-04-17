const Usermodel = require("../src/databases/model/UserModel.js");
const verify = require("./verify.js")
class User {
  constructor(firstName, age, email, senha) {
    
    if (!firstName || !age || !email || !senha) {
      console.log(`Error! Necessário definir: Nome, idade, email, senha`);
    }
                            
    try {
 async function create() { 

   
    const model = {
      firstName,
      age,
      email,
      password: senha,
    };
       
      const veri = await verify(email);

                               
  console.log(veri)
    if (veri === "unvalid") return "bad";
const user = Usermodel.create(model);
console.log("Usuário criado com sucesso")
return "criado";
      }

      
return create();

      
  } catch (err) {
    console.log(`Erro ao criar o usuário`)
  }

  
}
}

module.exports = User;
