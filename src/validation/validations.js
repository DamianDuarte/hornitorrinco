const {check,body} = require ('express-validator');
const {loadUsers} = require ('../data/db_modules');


module.exports = [

    check('name')
        .notEmpty().withMessage('Tenemos un NN intentando ingresar').bail()
        .isLength({
            min:2,
            max:20
        }).withMessage('Debe ingresar entre 2 y 20 caracteres').bail()
        .isAlpha('es-ES').withMessage('Que te haces el turco, salame'),

    body('email')
        .notEmpty().withMessage('Escribi el Email, papafrita').bail()
        .isEmail().withMessage('Seguro que escribiste bien? no pusiste una coma?')
        .custom((value,{req})=> {
            const user = loadUsers().find(user => user.email === value)
            if (user){
                return false
            } else {
                return true
            }
        }).withMessage('El email ya se encuentra registrado')
     ]

