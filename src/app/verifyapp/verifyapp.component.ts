import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from '../profileservice.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-verifyapp',
  templateUrl: './verifyapp.component.html',
  styleUrls: ['./verifyapp.component.css']
})
export class VerifyappComponent implements OnInit {
  studentitem= {
    student_id : '',
    age : '',
    qualification : '',
    marks : '',
    appliedcourse : '',
    applicationstatus : ''}
  constructor(public _auth: AuthService,private fb: FormBuilder,private router:Router,private profileService:ProfileService) { }

  ngOnInit(): void {
    let studentId = localStorage.getItem("editStudentId");
        this.profileService.getStudent(studentId).subscribe((data)=>{
      this.studentitem=JSON.parse(JSON.stringify(data));
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

  editStudent()
  {    
    this.profileService.editStudent(this.studentitem);   
    alert("Success");
    //this.router.navigate(['book']);
    //this.router.navigate(['books']);
  }

}
