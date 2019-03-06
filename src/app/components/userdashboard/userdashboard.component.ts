import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.scss'],
})
export class UserdashboardComponent implements OnInit {
  name:string=""
  constructor(private actRoute : ActivatedRoute, private route:Router) { }

  ngOnInit() {
    this.actRoute.paramMap.subscribe((param: ParamMap)=>{
      this.name = param.get('name')
      

   })
  }

}
