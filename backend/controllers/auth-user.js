const repository = require('../repository/auth-user');
const controller = {};
const UserModel = require('../models/user');
const auth = require('../services/authToken');

controller.registerUser = async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
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
    const email = req.body.email,
        password = req.body.password;
    console.log(email);

    try {
        const auth = await repository.authUser(email, password);
        console.log(auth);
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
