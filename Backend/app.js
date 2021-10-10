
const express = require('express');
//const xl = require('excel4node');
const session = require('express-session');
const CourseData = require('./src/model/Coursedata');
const StudentData = require('./src/model/Studentdata');
const FacultyData = require('./src/model/Facultydata');
//const User = require('./src/model/user');
const Userdata = require('./src/model/Userdata');
const NotificationData = require('./src/model/Notificationdata');
const cors = require('cors');
var bodyparser=require('body-parser');
const jwt = require('jsonwebtoken')
var app = new express();
app.use(cors());
app.use(bodyparser.json());
username='admin';
password='1234';
var nodemailer = require('nodemailer');

app.use(session({      //session creation
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Acess-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
  next();
});

function verifyToken(req, res, next) {
    if(!req.headers.authorization) {
      return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null') {
      return res.status(401).send('Unauthorized request')    
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload) {
      return res.status(401).send('Unauthorized request')    
    }
    req.userId = payload.subject
    next()
  }

app.get('/',function(req,res){  
//app.get('/',verifyToken,function(req,res){
      // CourseData.find()
      // .then(function(courses){
      //     res.send(home);
      // });
     res.send(home);
});

app.post('/insert',verifyToken,function(req,res){
//  app.post('/insert',function(req,res){ 
    console.log(req.body);
   
    var course = {       
      name : req.body.course.name,
      department : req.body.course.department,
      noofseats : req.body.course.noofseats,
   }       
   var course = new CourseData(course);
   course.save();
});
app.get('/courses',function(req,res){
    
  CourseData.find()
                .then(function(courses){
                    res.send(courses);
                });
});

//app.get('/:id',  (req, res) => {
 // app.get('/books/:id',  (req, res) => {
//   app.get('/courses/:_id',  (req, res) => {     
//   //const id = req.params.id;
//   const id = req.params._id;
//     CourseData.findOne({"_id":id})
//     .then((course)=>{
//         res.send(course);
//     });

// })

app.post('/login', (req, res) => {
    let userData = req.body
          
    let username = req.body.username;
    let password = req.body.password;

    //let type = req.body.usertype;
    //console.log("type:",type);
    //let uid = req.body._id;
//     // check for user
//     if (username == 'admin' && password == '1234') {
//         req.session.role = 'admin';
//         console.log("admin logined successfully")
//         let payload = { subject: username + password, admin:true }
//         let token = jwt.sign(payload, 'secretKey')
//         res.send({ status: true, token, role: req.session.role });

//     } else {
  Userdata.findOne({ username: username,password: password }, function (err, user) {
            console.log(req.body, "check for user");
            let type = user.usertype;
            console.log("type:",type);

            if (err) {
                res.send({ status: false, data: 'Response error. No Internet' });
            }
            else if (user) {
                console.log("normal user login success")
                req.session.uname = username;
                //let uname = req.session.uname;
                if (type == 'student')
                {
                  req.session.role = 'student';
                }
                else
                {
                  req.session.role = 'faculty';
                }
                //req.session.role = 'user';
                let payload = { subject: username + password,admin:false}
                let token = jwt.sign(payload, 'secretKey')
                //res.send({ status: true, token, role: req.session.role})
                res.send({ status: true, token, role: req.session.role,email:  req.session.uname})
                console.log({ status: true, token, role: req.session.role,email:  req.session.uname})
            } else {
                res.send({ status: false, data: 'NOT FOUND' });
            }
            console.log("user data", user)
            
        });
//    }

});

//app.use(function(req, res, next){
app.get('*', function(req, res,next){
  res.locals.user = req.user;
  console.log("user",req.user);
  next();
});

//new user

app.post('/signup', function (req, res) {
    //let item = {
var useritem = {
        name: req.body.user.name,
        username: req.body.user.username,
        password: req.body.user.password,
        usertype: req.body.user.usertype

    }
    console.log("usertype:"+req.body.user.usertype);
    //let user = User(item);
    var profile = Userdata(useritem);
    console.log("user:"+profile);
    //user.save().then(function (data) {
    profile.save().then(function (data) {
      console.log("user:"+data);
        res.send(true);
    }).catch(function (error) {
        res.send(false);
    })

    //ends

});



    //app.put('/update',(req,res)=>{
  //     app.put('/update',verifyToken,(req,res)=>{
  //     console.log(req.body)
  //     id=req.body._id,
  //     coursename = req.body.name,
  //     faculty = req.body.faculty,
  //     noofstudents = req.body.noofstudents,
  //     noofseats = req.body.noofseats
  //    CourseData.findByIdAndUpdate({"_id":id},
  //                                 {$set:{
  //                                 "name":coursename,
  //                                 "faculty":faculty,
  //                                 "noofstudents":noofstudents,
  //                                 "noofseats":noofseats}})
  //    .then(function(){
  //        res.send();
  //    })
  //  })
   
//app.delete('/remove/:id',(req,res)=>{
  // app.delete('/remove/:id',verifyToken,(req,res)=>{
   
  //    id = req.params.id;
  //    CourseData.findByIdAndDelete({"_id":id})
  //    .then(()=>{
  //        console.log('success')
  //        res.send();
  //    })
  //  })

//app.post('/insertstudent',verifyToken,function(req,res){
  app.post('/insertstudent',function(req,res){   
    console.log(req.body);
   
    var student = {       
        student_id : req.body.student.student_id,
        age : req.body.student.age,
        qualification : req.body.student.qualification,
        marks : req.body.student.marks,
        appliedcourse : req.body.student.appliedcourse,
        applicationstatus : req.body.student.applicationstatus,
   }       
   var student = new StudentData(student);
   student.save();
});
//app.get('/students',function(req,res){
  app.get('/viewapp',function(req,res){
    console.log("students list");
    StudentData.find()
                .then(function(students){
                  console.log("students_list:"+students);
                    res.send(students);
                });
});

  app.get('/students/:_id',  (req, res) => {     

  //const id = req.params.id;
  const id = req.params._id;  
    StudentData.findOne({"_id":id})
    .then((student)=>{
        res.send(student);
    });

})

function checklimit(req,res,next){
  StudentData.count({"applicationstatus":"approved"})
  .then((student)=>{
    if (student<40){
    res.send();
    next();
    }
    else{
      res.status(401).send('sorry..over the limit')
    }
  });
}

//app.put('/update',(req,res)=>{
  app.put('/update',verifyToken,checklimit,(req,res)=>{
  console.log(req.body)
  id=req.body._id,
  student_id = req.body.student_id,
  age = req.body.age,
  qualification = req.body.qualification,
  marks = req.body.marks,
  appliedcourse = req.body.appliedcourse,
  applicationstatus = req.body.applicationstatus
 StudentData.findByIdAndUpdate({"_id":id},
                              {$set:{
                              "student_id":student_id,
                              "age":age,
                              "qualification":qualification,
                              "marks":marks,
                              "appliedcourse":appliedcourse,
                              "applicationstatus":applicationstatus}})
 .then(function(){
     res.send();
 })
})

//app.post('/insertnotification',function(req,res){ 
  app.post('/insertnotification',verifyToken,function(req,res){
  console.log(req.body);
 
  var notification = {       
    username : req.body.notification.username,
    course : req.body.notification.course,
    message : req.body.notification.message,
 }       
 var notification = new NotificationData(notification);
 course=req.body.notification.course
 message = req.body.notification.message
 notification.save();
 StudentData.find({appliedcourse:course}, function(err, allUsers){
  if(err){
      console.log(err);
  }
  var mailList = [];
  allUsers.forEach(function(users){
      mailList.push(users.student_id);
      return mailList;
  });
  var smtpTransport = nodemailer.createTransport({
      service: 'Gmail', 
      auth: {
          user: 'ajildd10@gmail.com',
          pass: "unknownclient"
      }
  });
  var mailOptions = {
          to: [],
          bcc: mailList,
          from: 'ajildd10@gmail.com',
          subject: 'Subject',
          text: message
      };
      smtpTransport.sendMail(mailOptions, function(err) {
          if(err){
              console.log(err);
              req.flash("error", "We seem to be experiencing issues. Please try again later.");
              res.redirect("/");
          }
          console.log('mail sent to ' + mailList);
      });
});
//res.redirect("/admin");
});
// //app.delete('/removeauthor/:id',(req,res)=>{
//   app.delete('/removeauthor/:id',verifyToken,(req,res)=>{
//  id = req.params.id;
//  AuthorData.findByIdAndDelete({"_id":id})
//  .then(()=>{
//      console.log('success')
//      res.send();
//  })
// })

//app.post('/insertfaculty',verifyToken,function(req,res){
  app.post('/insertfaculty',function(req,res){   
  console.log(req.body);
 
  var faculty = {       
      faculty_id : req.body.faculty.name,
      age : req.body.faculty.age,
      qualification : req.body.faculty.qualification,
      yearofpassout : req.body.faculty.yearofpassout,
      universityregno : req.body.faculty.universityregno,
      department : req.body.faculty.department,
 }       
 var faculty = new FacultyData(faculty);
 faculty.save();
});

app.get('/viewnotification',function(req,res){
  console.log("role:"+req.session.role);
  console.log("student:"+uname);
  StudentData.findOne({"student_id":uname})
  .then((student)=>{
  //    res.send(student);
  student_course=student.appliedcourse
  NotificationData.find({course:student_course})
  .then(function(notifications){
    console.log("notifications_list:"+notifications);
      res.send(notifications);
  });
});
});


app.listen(3000, function(){
    console.log('listening to port 3000');
});


