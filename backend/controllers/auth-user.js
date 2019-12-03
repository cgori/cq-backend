const repository = require('../repository/auth-user');
const controller = {};
const UserModel = require('../models/user');
const auth = require('../services/authToken');

controller.registerUser = async (req, res) => {
    try {
        const validateUser = await repository.validateUser(req.body);
        if (validateUser) {
            req.body.password = repository.hashPassword(req.body.password);
            var user = new UserModel(req.body);
            var result = await user.save();
            res.send(result);
        } else {
            res.send({ errmsg: 'regex not matched' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

controller.loginUser = async (req, res) => {
    const username = req.body.username,
        password = req.body.password;

    try {
        const auth = await repository.authUser(username, password);
        res.json({
            success: true,
            message: 'Authentication successful!',
            token: auth,
        });
    } catch (err) {
        res.send('err');
    }
};

module.exports = controller;
