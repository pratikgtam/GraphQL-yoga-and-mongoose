const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const mongodbConnect = process.env.mongodbConnect;


const db = mongoose.connect(mongodbConnect, { useNewUrlParser: true, useUnifiedTopology: true });
const Schema = mongoose.Schema;
const peopleSchema = new Schema({
    first: { type: String },
    last: { type: String }
})
module.exports = mongoose.model('people', peopleSchema)
