const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const fs = require('fs')
const { check, validationResult } = require('express-validator')
const config = require('config')
const auth = require('../../middleware/auth')
const jwt = require('jsonwebtoken')
const possuiAcesso = require('../../middleware/possuiAcesso')

const User = require('../../models/User')

// @TODO - implementar acesso

// @route  GET api/usuario
// @desc   Retorna as infos do usuário atual
// @access Private
router.get('/', [auth], async (req, res) => {
  let user = await User.findOne({ _id: req.user.id })
    .select('-senha')
    .select('-acesso')
    .select('-__v')
  res.contentType(user.avatar.contentType)
  res.send(user.avatar.data)

  if (!user) {
    res.status(500).json({ errors: [{ msg: 'Credenciais Inválidas' }] })
  }
  return res.status(200).json(user)
})

// @route  POST api/usuario
// @desc   Registrar usuário
// @access Public
// @Todo   Incluir a imagem
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

    const { nome, email, senha, cpf, acesso, imgPath } = req.body

    try {
      let user = await User.findOne({ email })

      if (user) {
        return res.status(400).json({ errors: [{ msg: 'Usuário existente' }] })
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
      // user.avatar.data = fs.readFileSync(imgPath)
      // user.avatar.contentType = 'image/png'

      await user.save()

      const payload = {
        user: {
          id: user.id,
          acesso: user.acesso,
        },
      }

      jwt.sign(
        payload,
        config.get('jwtToken'),
        { expiresIn: 360000 },
        (error, token) => {
          if (error) throw error
          res.json({ token })
        }
      )
    } catch (error) {
      console.log(error.message)
      res.status(500).send('Server error')
    }
  }
)

// @route  UPDATE api/usuario
// @desc   Muda as infos do usuário
// @access Private
// @todo   Verificar Privilégio
router.put(
  '/',
  [
    auth,
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
    let camposAtualizados = {
      _id: req.user.id,
      acesso: req.user.acesso,
      nome: req.body.nome,
      email: req.body.email,
      cpf: req.body.cpf,
    }
    const { senha } = req.body

    const salt = await bcrypt.genSalt(10)
    camposAtualizados.senha = await bcrypt.hash(senha, salt)
    console.log(camposAtualizados)

    try {
      let user = await User.findOne({ _id: req.user.id })
      console.log(user)
      if (user) {
        user = await User.findOneAndUpdate(
          { _id: req.user.id },
          { $set: camposAtualizados },
          { new: true }
        )
      }
      console.log(user)
      return res.json(user)
    } catch (error) {
      console.log(error.message)
      res.status(500).send('Server error')
    }
  }
)

// @route  DELETE api/usuario
// @desc   deleta o usuário
// @access Private
// @todo   Verificar Privilégio
router.delete('/', auth, async (req, res) => {
  try {
    let user = await User.findOneAndRemove({ _id: req.user.id })
    if (user) return res.json({ message: 'Usuário removido.' })
    return res.json({ message: 'Usuário inexistente.' })
  } catch (error) {
    console.log(error)
    res.stuatus(500).send('Server error')
  }
  console.log(user)
})

module.exports = router
