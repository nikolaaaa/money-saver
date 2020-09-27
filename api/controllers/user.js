const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.createUser =  (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User({
                name: req.body.name,
                email: req.body.email,
                password: hash,
            });
            user.save()
                .then(result => {
                    console.log(result);
                    res.status(201).json({
                        message: 'User created',
                        result: result
                    });
                })
                .catch(error => {
                    res.status(500).json({
                        message: 'Invalid authentication credentials!'
                    })
                });
        })
        .catch(error => {
            return res.status(401).json({
                message: 'Invalid request!'
            })
        });
}

exports.userLogin = (req, res, next) => {
    let fetchedUser;

    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                return res.status(401).json({
                    message: 'Auth failed 1'
                })
            }
            fetchedUser = user;
            return bcrypt.compare(req.body.password, user.password);
        })
        .then(result => {
            if (!result) {
                return res.status(401).json({
                    message: 'Auth failed 2'
                })
            }

            const token = jwt.sign({ email: fetchedUser.email, userId: fetchedUser._id }, process.env.JWT_KEY, { expiresIn: '1h' });

            res.status(200).json({
                token: token,
                expiresIn: 3600,
                userId: fetchedUser._id
            })
        })
        .catch(error => {
            return res.status(401).json({
                message: 'Invalid authentication credentials!'
            })
        })
}