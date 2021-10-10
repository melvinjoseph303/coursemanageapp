import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ICourse } from '../coursemodel';
import { CourseService } from '../courseservice.service'
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  constructor(private _auth: AuthService,private fb: FormBuilder,private courseService: CourseService,private router: Router) { }
  notifications= [{
    username:'',
    course:'',
    message:''}]
  ngOnInit(): void {
    this.courseService.getNotifications().subscribe((data)=>{
      this.notifications=JSON.parse(JSON.stringify(data));
    })
  }

}
