const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/coursemanageapp');
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.1k3dv.mongodb.net/coursemanageapp?retryWrites=true&w=majority');
const Schema = mongoose.Schema;
const FacultySchema = new Schema({
    faculty_id : String,
    age : String,
    qualification : String,
    yearofpassout : String,
    universityregno : String,
    department : String
});
var Facultydata = mongoose.model('facultydata',FacultySchema);
module.exports = Facultydata;