const jwt = require ("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, 'secret', { expiresIn: "1d" });
};

module.exports = { generateToken };