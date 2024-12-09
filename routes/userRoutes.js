const express = require('express')
const router = express.Router()
const loginController = require("../controllers/userController/loginController")


//router.get('/',l)
router.get('/login',loginController.loginLoading)

module.exports = router