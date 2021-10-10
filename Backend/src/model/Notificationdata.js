const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/coursemanageapp');
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.1k3dv.mongodb.net/coursemanageapp?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

var NotificationSchema = new Schema({
    name: String,
    course : String,
    message : String,
});

var Notificationdata = mongoose.model('notificationdata', NotificationSchema);                        //UserData is the model and NewBookData is the schema

module.exports = Notificationdata;