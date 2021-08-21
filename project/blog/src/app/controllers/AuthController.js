class AuthController {
    login(req,res,next){
        const isLoggedIn = req.get('Cookie');
        console.log(isLoggedIn)
        res.render("auth/login", {
            path: '/login',
            pageTitle: '/login',
            isAuthenticated: req.loggedIn
        });
    }
    postLogin(req,res,next){
        res.setHeader('Set-Cookie', 'loggedIn=true');
        res.redirect('/')
    }
}
module.exports = new AuthController