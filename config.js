module.exports = {
    port: 3000,

    jwt: { secret: 'worldisfullofdevelopers' },

    db: {
        host: '51.89.139.24',
        port: 27017,
        name: 'criticalquestion',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            auth: { authSource: 'admin' },
            user: 'admin',
            pass: 'OrangeFlow20',
        },
    },
};
