const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const { check, validationResult } = require('express-validator')

const User = require('../../models/User')

// @route  POST api/users
// @desc   Register user
// @access Public
router.post(
  '/',
  [
    check('nome', 'Por favor incluir nome').not().isEmpty(),
    check('email', 'Por favor inclua um email válido').isEmail(),
    check(
      'senha',
      'Por favor entre uma senha com 6 ou mais caracteres'
    ).isLength({ min: 6 }),
    check('cpf', 'Por favor incluir cpf válido')
      .not()
      .isEmpty()
      .isLength({ min: 11, max: 11 }),
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { nome, email, senha, cpf, acesso } = req.body

    try {
      let user = await User.findOne({ email })

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] })
      }

      user = new User({
        nome,
        email,
        senha,
        cpf,
        acesso,
      })

      const salt = await bcrypt.genSalt(10)
      user.senha = await bcrypt.hash(senha, salt)

      await user.save()

      res.send('User Registered')

      // Return jsonwebtoken
    } catch (error) {
      console.log(error.message)
      res.status(500).send('Server error')
    }
  }
)

module.exports = router
