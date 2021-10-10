import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ICourse } from '../coursemodel';
import { CourseService } from '../courseservice.service'
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {

  constructor(private _auth: AuthService,private fb: FormBuilder,private courseService: CourseService,private router: Router) { }
  courseItem= {
    name:'',
    department:'',
    noofseats:''}
     addcourseForm = this.fb.group(
      {
        name: ['', Validators.required],
        department: ['', Validators.required],
        noofseats: ['', Validators.required]
      }
    )
  ngOnInit(): void {
  }
  addCourse()
  {    
    this.courseService.newCourse(this.courseItem);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/']);
  }
}
