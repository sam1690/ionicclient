import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {SignuphttpService} from '../../services/signuphttp.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  
  userobj = {email:"",password:""}
  msg:String="";

  constructor(private router: Router, private loginrequest : SignuphttpService) { }

  ngOnInit() {}


  showdashboard(){
     this.loginrequest.loggedin(this.userobj).subscribe((data)=>{
       console.log(data)
       localStorage.setItem('token',data.token)
       if(data.msg=="Email is not verified" || data.msg=="Email or Password may be wrong"){
         this.msg=data.msg
       }
       else{
        this.router.navigateByUrl("/userdashboard/"+data.userDetails.name)
       }
       
     })
   
      
    
   
   
    
  }

}
