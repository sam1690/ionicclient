import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {


  name:String=""
  constructor(private actRoute : ActivatedRoute, private route:Router) { }

  ngOnInit() {

    this.actRoute.paramMap.subscribe((param: ParamMap)=>{
      this.name = param.get('name')
      

   })
  }

}
