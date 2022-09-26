const colors = require ('../data/colors');




module.exports = {

    principal: (req,res) => {
        if (req.session.userLogin) {
            return res.render('principal', {user:req.session.userLogin})
        }
       return res.redirect('/')
    },

    logout: (req,res) => {
        res.render('logout')
        
    }
}