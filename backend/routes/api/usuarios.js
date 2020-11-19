const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const config = require('config')
const auth = require('../../middleware/auth')

const User = require('../../models/User')

// @route  GET api/usuarios
// @desc   Retorna todos os usuários
// @access Private
// @todo   Verificar Privilégio
router.get('/', auth, async (req, res) => {
  if (req.user.acesso !== 999) {
    return res.status(401).json({
      msg: 'Acesso negado. Você não tem o acesso necessário para essa ação.',
    })
  }

  let users = await User.find().select('-_id').select('-__v')

  if (!users) {
    return res.status(200).send('Sem usuários cadastrados')
  }

  return res.json(users)
})

module.exports = router
