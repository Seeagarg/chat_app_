const jwt = require('jsonwebtoken');

const generateToken=async(userId,res)=>{
    const token = jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:'5d'
    });

    res.cookie('jwt',token,{
       httpOnly: false, // Set to `false` to allow frontend access via JavaScript
    secure: false, // Set to `true` if using HTTPS
    sameSite: 'Lax', // Use 'None' for cross-site, 'Lax' or 'Strict' as per your needs
    path: '/',
    maxAge: 24 * 60 * 60 * 1000,
    })
}

module.exports = {generateToken}