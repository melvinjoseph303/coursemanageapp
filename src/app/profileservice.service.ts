import { Injectable } from '@angular/core';
import {HttpClient ,HttpResponse} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  studentitem= {
    student_id : '',
    age : '',
    qualification : '',
    marks : '',
    appliedcourse : '',
    applicationstatus : ''}

    facultyitem= {
      faculty_id : '',
      age : '',
      qualification : '',
      yearofpassout : '',
      universityregno : '',
      department : ''}
  constructor( private http:HttpClient) { }
  getStudent(id:any){
    //return this.http.get("http://localhost:3000/"+id);
    return this.http.get("http://localhost:3000/students/"+id);
  }
  getStudents(){
    //return this.http.get("http://localhost:3000/students");
    return this.http.get("http://localhost:3000/viewapp");
  }
  newStudent(studentitem:any)
  {   
    return this.http.post("http://localhost:3000/insertstudent",{"student":studentitem})
    .subscribe(data =>{console.log(data)})
  }
  editStudent(student:any)
  {
    console.log('client update')
    return this.http.put("http://localhost:3000/update",student)
    .subscribe(data =>{console.log(data)})
  }
  verifyStudent(student:any)
  {
    console.log('client update')
    return this.http.put("http://localhost:3000/verify",student)
    .subscribe(data =>{console.log(data)})
  }
  newFaculty(facultyitem:any)
  {   
    return this.http.post("http://localhost:3000/insertfaculty",{"faculty":facultyitem})
    .subscribe(data =>{console.log(data)})
  }
}
