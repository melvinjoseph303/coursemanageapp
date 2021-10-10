import { Injectable } from '@angular/core';
import {HttpClient ,HttpResponse} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  item = {
    name: '',
    username: '',
    password: '',
    usertype: ''
  }
  constructor(private http: HttpClient) { }
  newUser(item: any) {
    //return this.http.post("http://localhost:3000/login/signup", { "user": item })
    return this.http.post("http://localhost:3000/signup", { "user": item })
    //return this.http.post("http://localhost:3000/register",{"user":item})
    .subscribe(data =>{console.log(data)})
  }
}
