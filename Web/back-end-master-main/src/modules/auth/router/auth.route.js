const express = require('express');
const app = express();
const router = express.Router();
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const {
    RegisterUserValidator,
    RegisterDoctorValidator,
    LoginUserValidator,
} = require('../validator/auth.validator');

const { upload } = require('../../../util/UploadImage');

const authController = require('../../auth/controller/auth.controller');
const { RegisterUser } = require('../controller/functions/register');

app.use(express.json());

router.post('/register/user', RegisterUserValidator, authController.register.RegisterUser);
router.post('/register/doctor', upload.single('image'),RegisterDoctorValidator, authController.register.RegisterDoctor);
router.post('/register/admin', RegisterUserValidator, authController.register.RegisterAdmin);

router.post('/login', 
    LoginUserValidator, 
    authController.login
);

router.post('/forget-password', authController.forgotpassword.ForgetPassword);
router.post('/verify/password-reset-code', authController.forgotpassword.verifycode);
router.post('/reset-password', authController.forgotpassword.Resetpassword);

// Register Endpoint
router.post('/register', RegisterUser);

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'No token provided' });
  }
  const token = authHeader.split(' ')[1];
  console.log('TOKEN:', token);
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid or malformed token' });
  }
}

module.exports = router;