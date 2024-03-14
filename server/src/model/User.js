const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true
    },

    // Refrence to other user documents
    contacts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],

    // Profile 
    profile:{
        fullName: String,
        nickname: String,
        phoneNumber: String,
    },

    date: {
        type: Date,
        default: Date.now,
        required: true
    }
});

module.exports = mongoose.model('User', userSchema);