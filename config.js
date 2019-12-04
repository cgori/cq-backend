module.exports = {
    port: 80,
    secret: 'worldisfullofdevelopers',
    db: {
        host: '51.89.139.147',
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
