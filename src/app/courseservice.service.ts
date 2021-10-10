import { Injectable } from '@angular/core';
import {HttpClient ,HttpResponse} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CourseService {
  item= {
    name:'',
    department:'',
    noofseats:''
  }
  constructor( private http:HttpClient) { }
  getCourse(id:any){
    //return this.http.get("http://localhost:3000/"+id);
    return this.http.get("http://localhost:3000/courses/"+id);
  }
  getCourses(){
    //return this.http.get("http://localhost:3000/courses");
    return this.http.get("http://localhost:3000/courses");
  }
  newCourse(item:any)
  {   
    return this.http.post("http://localhost:3000/insert",{"course":item})
    .subscribe(data =>{console.log(data)})
  }
  newNotification(item:any)
  {   
    return this.http.post("http://localhost:3000/insertnotification",{"notification":item})
    .subscribe(data =>{console.log(data)})
  }
  getNotifications(){
    //return this.http.get("http://localhost:3000/students");
    return this.http.get("http://localhost:3000/viewnotification");
  }
}
