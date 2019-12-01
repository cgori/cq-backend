const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        firstName: String,
        lastName: String,
        email: { type: String, unique: true },
        title: String,
        username: { type: String, required: true, index: { unique: true } },
        password: { type: String, required: true },
        loginAttempts: { type: Number, required: true, default: 0 },
        lockUntil: { type: Number },
    },
    { timestamps: true }
);

UserSchema.pre(
    'save',
    function(next) {
        var user = this;
        if (!user.isModified('password')) {
            return next();
        }
        bcrypt.hash(user.password, 10).then((hashedPassword) => {
            user.password = hashedPassword;
            next();
        });
    },
    function(err) {
        next(err);
    }
);
UserSchema.methods.comparePassword = function(candidatePassword, next) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return next(err);
        next(null, isMatch);
    });
};
module.exports = mongoose.model('User', UserSchema, 'user');
