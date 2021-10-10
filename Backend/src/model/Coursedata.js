const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/coursemanageapp');
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.1k3dv.mongodb.net/coursemanageapp?retryWrites=true&w=majority');
const Schema = mongoose.Schema;
const CourseSchema = new Schema({
        name: String,
        department: String,
        noofseats : String
});
var Coursedata = mongoose.model('coursedata',CourseSchema);
module.exports = Coursedata;