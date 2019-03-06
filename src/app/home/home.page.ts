import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //#################PROPERTIES##############################//
  
  private imgurl: any[] = ["/assets/image/logo-white.png"];

  //###############END OF PROPERTIES###########################//


  //################CONSTRUCTOR#######################//
     constructor(private router: Router) 
     {}
  //############CONSTRUCTOR END########################//


  //##################METHODS##################################//

  signupform()
  {
    
    
    this.router.navigateByUrl('/home/signup');
  }

  loginform()
  {
    this.router.navigateByUrl('/home/login');
  }
   
  //##################END OF METHODS##############################//
}
