import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
import {SignuphttpService} from '../../services/signuphttp.service';


@Component({
  selector: 'app-verifyemail',
  templateUrl: './verifyemail.component.html',
  styleUrls: ['./verifyemail.component.scss'],
})
export class VerifyemailComponent implements OnInit {


  id:String="";
  msg:String="";
  noticehead:String="Email Verification";
  noticebody:String="Email verified Successfully"
  isnotice:boolean=false
  constructor(private actRoute : ActivatedRoute, private route:Router, private verifymail : SignuphttpService) { }

  ngOnInit() {
   this.actRoute.paramMap.subscribe((param: ParamMap)=>{
      var id = param.get('id')
      this.id = id

   })

  }


  verifyemail(){
      
    this.verifymail.verifyemail(this.id).subscribe((data)=>{
      this.msg=data.msg;
      console.log(data.msg)
      this.isnotice=true;
      
      //this.router.navigateByUrl("/home/dashboard")
    })
  }

}
