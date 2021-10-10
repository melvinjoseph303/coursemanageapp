const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/coursemanageapp');
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.1k3dv.mongodb.net/coursemanageapp?retryWrites=true&w=majority');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
        name: String,
        username: String,
        password : String,
        usertype: String
});
var Userdata = mongoose.model('userdata',UserSchema);
module.exports = Userdata;