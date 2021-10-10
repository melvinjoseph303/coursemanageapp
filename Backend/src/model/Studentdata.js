const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/coursemanageapp');
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.1k3dv.mongodb.net/coursemanageapp?retryWrites=true&w=majority');
const Schema = mongoose.Schema;
const StudentSchema = new Schema({
        student_id : String,
        age : String,
        qualification : String,
        marks : String,
        appliedcourse : String,
        applicationstatus : String
});
var Studentdata = mongoose.model('studentdata',StudentSchema);
module.exports = Studentdata;