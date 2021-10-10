import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseService } from '../courseservice.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses= [{
    name : '',
    department : '',
    noofseats : ''}]
  constructor(private _auth: AuthService,private fb: FormBuilder,private courseService: CourseService,private router: Router) { }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((data)=>{
      this.courses=JSON.parse(JSON.stringify(data));
    })
  }

}
