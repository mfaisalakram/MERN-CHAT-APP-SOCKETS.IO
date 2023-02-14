import jwt from 'jsonwebtoken'
const generateToken = (id) => {


    return jwt.sign({ id }, 'mysecret', {
        expiresIn: "30d",
    })
}

module.exports = generateToken;