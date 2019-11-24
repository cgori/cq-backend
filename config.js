module.exports = {
    port: 5000,

    db: {
        host: '51.89.139.147',
        port: 27017,
        name: 'criticalquestion',
        options: {
            useNewUrlParser: true,
            auth: { authSource: 'admin' },
            user: 'admin',
            pass: '70MixingOrange',
        },
    },
};
