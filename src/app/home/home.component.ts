import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseService } from '../courseservice.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
