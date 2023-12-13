// config/db.js
const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/f8_education_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            
        });
        console.log('Connect success!!');
    } catch (error) {
        console.log('Connect error: ' + error);
    }
}

module.exports = { connect };
