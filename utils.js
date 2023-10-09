const bcrypt = require('bcrypt');

const createHash = (password) => 
bcrypt.hashSync(password, bcryot.genSaltSync(10))

const isValidatePassword = (user,password) => bcrypt.compareSync(password, user.password)

module.exports = {
    createHash,
    isValidatePassword
}