const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { check, validationResult } = require('express-validator')
const config = require('config')

const User = require('../../models/User')

// @route  POST api/login
// @desc   Fazer login
// @access Public
router.post(
  '/',
  [
    // check('cpfemail', 'Por favor incluir CPF ou Email.').exists(),
    check('senha', 'Por favor incluir senha.').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { email, senha } = req.body
    // const { cpfemail, senha } = req.body
    // const chave = 2
    //Lógica para saber se é cpf ou email
    //Is number

    try {
      let user = await User.findOne({ email })
      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Credenciais Inválidas ' }] })
      }

      const isMatch = await bcrypt.compare(senha, user.senha)

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Credenciais Inválidas' }] })
      }

      const payload = {
        user: {
          id: user.id,
          acesso: user.acesso,
        },
      }

      const { id, acesso } = payload.user

      jwt.sign(
        payload,
        config.get('jwtToken'),
        { expiresIn: 360000 },
        (error, token) => {
          if (error) throw error
          res.json({ token, id, acesso })
        }
      )
    } catch (error) {
      console.log(error.message)
      res.status(500).send('Server error')
    }
  }
)

module.exports = router
