import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IUser } from '../usermodel';
import { UserService } from '../userservice.service';
import { FormBuilder, FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userItem = {
    name: '',
    username: '',
    password: '',
    usertype: ''
  }
  regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9]+).([a-z]{2,3})(.[a-z]{2,3})?$/
  constructor(private _auth: AuthService,
    private router: Router, private fb: FormBuilder,
    private userService: UserService) { }

    addUserForm = this.fb.group(
      {
        name: ['', [Validators.required]],
        username: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        usertype: ['', [Validators.required]],
      }
    )

  ngOnInit(): void {
  }

  // addUser() {
  //   this.userService.newUser(this.userItem).subscribe(
  //     response => {
  //       if (response) {         
  //           this.router.navigate(['/']);
  //      }
  //       else {
  //         console.log("Network Error")
  //         this.router.navigate(['/register']);
  //       }
  //     })
  // }
  addUser() {
    this.userService.newUser(this.userItem);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/']);
  }
}
