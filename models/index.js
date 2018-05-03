const dotenv = require('dotenv');
dotenv.load();
const url = 'mongodb://'+process.env.USER+':'+process.env.PASS+'@'+process.env.HOST+':'+process.env.PORTY+'/'+process.env.DB; 

const mongoose = require('mongoose')
mongoose.set('debug', true);
mongoose.connect(url);
mongoose.Promise = Promise; 

module.exports.Todo = require("./todo");