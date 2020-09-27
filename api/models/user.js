const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true, createIndexes: true },
    password: { type: String, require: true },
}, {
    timestamps: { createdAt: 'created_at' }
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);