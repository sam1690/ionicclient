import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SignuphttpService {

  constructor(private http: HttpClient) { }

  loggedin(Userdetails:any):Observable<any>{
    return this.http.post("http://localhost:9000/user/login",Userdetails)
  }
  
  registration(Userdetails:any):Observable<any>{
    return this.http.post("http://localhost:9000/user/signup",Userdetails)
  }
  verifyemail(userid:any):Observable<any>{
    return this.http.get("http://localhost:9000/user/verifyemail/"+userid)
  }
 
}
