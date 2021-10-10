import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from '../profileservice.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-viewapplication',
  templateUrl: './viewapplication.component.html',
  styleUrls: ['./viewapplication.component.css']
})
export class ViewapplicationComponent implements OnInit {
  students= [{
    student_id : '',
    age : '',
    qualification : '',
    marks : '',
    appliedcourse : '',
    applicationstatus : ''}]


  studentitem= {
    student_id : '',
    age : '',
    qualification : '',
    marks : '',
    appliedcourse : '',
    applicationstatus : ''}
  constructor(public _auth: AuthService,private fb: FormBuilder,private router:Router,private profileService:ProfileService) { }

  ngOnInit(): void {
    //let studentId = localStorage.getItem("editStudentId");
    this.profileService.getStudents().subscribe((data)=>{
      this.students=JSON.parse(JSON.stringify(data));
    })
  //   this.profileService.getStudent(studentId).subscribe((data)=>{
  //     this.studentitem=JSON.parse(JSON.stringify(data));
  // })
  }

  editStudent(student:any)
  //verifyStudent()
  {
    localStorage.setItem("editStudentId", student._id.toString());
    this.router.navigate(['update']);
    //this.profileService.verifyStudent(this.studentitem);
  }
  
}
