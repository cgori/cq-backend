const jwt = require('jsonwebtoken');
const express = require('express');
const config = require('../../config');

module.exports = {
    validateToken: (req, res, next) => {
        jwt.verify(req.headers.token, config.secret, (err, authorizedData) => {
            if (err) {
                //If error send Forbidden (403)
                console.log('ERROR: Could not connect to the protected route');
                res.sendStatus(403);
            } else {
                //If token is successfully verified, we can send the autorized data

                res.json({
                    message: 'Successful log in',
                    authorizedData,
                });

                console.log('SUCCESS: Connected to protected route');
            }
        });
    },
};
