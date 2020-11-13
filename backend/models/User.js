const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  senha: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    required: true,
  },
  // avatar: {
  //   type: String,
  //   required: true,
  // },
  acesso: {
    type: Number,
    required: true,
  },
})

module.exports = User = mongoose.model('user', UserSchema)
