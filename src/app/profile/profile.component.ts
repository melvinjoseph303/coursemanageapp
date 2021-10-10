import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from '../profileservice.service'
import { CourseService } from '../courseservice.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 //applicationstatus:string;
  constructor(public _auth: AuthService,private fb: FormBuilder,private profileService: ProfileService,private courseService: CourseService,private router: Router) {
    //this.applicationstatus = "not approved";
   }
  courses= [{
    name : '',
    department : '',
    noofseats : ''}]

  studentitem= {
    student_id : '',
    age : '',
    qualification : '',
    marks : '',
    appliedcourse : '',
    applicationstatus : 'not approved'}

    facultyitem= {
      faculty_id : '',
      age : '',
      qualification : '',
      yearofpassout : '',
      universityregno : '',
      department : ''}
  ngOnInit(): void {
    this.courseService.getCourses().subscribe((data)=>{
      this.courses=JSON.parse(JSON.stringify(data));
    })    
  }
  studentregisterForm = this.fb.group(
    {
      student_id: ['', Validators.required],
      age: ['', Validators.required],
      qualification: ['', Validators.required],
      marks: ['', Validators.required],
      appliedcourse: ['', Validators.required],
      applicationstatus: ['', Validators.required]
    }
  )
  facultyregisterForm = this.fb.group(
    {
      faculty_id: ['', Validators.required],
      age: ['', Validators.required],
      qualification: ['', Validators.required],
      yearofpassout: ['', Validators.required],
      universityregno: ['', Validators.required],
      department: ['', Validators.required]
    }
  )
  registerStudent()
  {    
    this.profileService.newStudent(this.studentitem);
    console.log("Called"); 
    console.log(this._auth.getUser());   
    alert("Success");
    this.router.navigate(['/']);
  }
  registerFaculty()
  {    
    this.profileService.newFaculty(this.facultyitem);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/']);
  } 
}
