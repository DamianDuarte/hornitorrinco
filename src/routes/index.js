var express = require('express');
var router = express.Router();
const {register, procesos } = require ('../controllers/mainController')
const {principal, logout} = require ('../controllers/userController')
const validaciones = require('../validation/validations')

/* GET home page. */
router
.get('/',register)
.post('/', validaciones, procesos)
.get('/principal', principal)
.get('/logout', logout)
module.exports = router;
