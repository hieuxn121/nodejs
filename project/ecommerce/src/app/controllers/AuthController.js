const User = require('../models/User');

class AuthController {
    login(req, res) {
        res.json('Login');
    }
}
module.exports = new AuthController;