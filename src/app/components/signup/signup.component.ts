import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {SignuphttpService} from '../../services/signuphttp.service'
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

 userobj={name:"",email:"",password:""}
 msg:String=""
 
  constructor(private router: Router, 
              private signup:SignuphttpService,
              private alertController:AlertController
              ) { }

  ngOnInit() {}

  

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'User Registered Successfully',
      message: 'Check your email to get email verification link...',
      buttons: [
        {
          text: 'Okay',
          role: 'cancel',
          
          handler: () => {
            this.router.navigateByUrl('/home/login')
          }
        }
      ]
    });

    await alert.present();
  }
  
  setTime(){
    setTimeout(()=>{this.presentAlertConfirm();},2000)
  }
  
  sendsignup(){
    
    this.signup.registration(this.userobj).subscribe((data)=>{
      
      console.log(data)
      this.msg=data.msg     
      
      this.setTime();
    
    });
  
    
    
    
     
   }

}
