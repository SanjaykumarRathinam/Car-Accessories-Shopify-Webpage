const jwt = require("jsonwebtoken");

const generateRefreshToken = (id) => {
  return jwt.sign({ id }, 'secret', { expiresIn: "3d" });
};

module.exports = { generateRefreshToken }