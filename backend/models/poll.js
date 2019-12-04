const Poll = new Schema({
    Questions: {
        Question: {
            answer: {
                userid: { type: Number },
            },
            chairman: { type: Number },
        },
    },
});

module.exports = mongoose.model('Poll', Poll, 'poll');
