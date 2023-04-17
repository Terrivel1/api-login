const Usermodel = require("../src/databases/model/UserModel.js");

async function verify(email) {
const usuarioExistente = await Usermodel.findOne({ email }, "email");
//console.log(usuarioExistente,email);
//if (!usuarioExistente) return;

if (usuarioExistente) { console.log(`Este email ja existe`)
return "unvalid";                             }

return "valid";
                                }
;

module.exports = verify;