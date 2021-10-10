import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CourseService } from '../courseservice.service'
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newnotification',
  templateUrl: './newnotification.component.html',
  styleUrls: ['./newnotification.component.css']
})
export class NewnotificationComponent implements OnInit {

  constructor(private _auth: AuthService,private fb: FormBuilder,private courseService: CourseService,private router: Router) { }
  notificationItem= {
    username:'',
    course:'',
    message:''}
    addnotificationForm = this.fb.group(
      {
        username: ['', Validators.required],
        course: ['', Validators.required],
        message: ['', Validators.required]
      }
    )
  ngOnInit(): void {
  }
  addNotification()
  {    
    this.courseService.newNotification(this.notificationItem);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/']);
  }
}
