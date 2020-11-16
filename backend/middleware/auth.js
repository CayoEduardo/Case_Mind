const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = function (req, res, next) {
  const token = req.header('x-auth-token')

  if (!token) {
    return res
      .status(401)
      .json({ msg: 'O token é necessário para realizar esta ação.' })
  }

  try {
    const decoded = jwt.verify(token, config.get('jwtToken'))
    req.user = decoded.user
    next()
  } catch (error) {
    res.status(401).json({ msg: 'Token inválido.' })
  }
}
