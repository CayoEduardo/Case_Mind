const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = function (req, res, next) {
  const acessoExigido = 1
  if (req.user.acesso && req.user.acesso === acessoExigido) {
    console.log('possui acesso')
    return next()
  }

  console.log('Não possui acesso')

  return res.status(403).json({ msg: 'Não possui acesso.' })
}
