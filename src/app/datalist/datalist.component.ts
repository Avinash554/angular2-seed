import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {  DatalistService } from'./datalist.service';
import * as _ from "lodash";
import { Router } from '@angular/router';

@Component({
  selector: 'app-datalist',
  templateUrl: './datalist.component.html',
  styleUrls: ['./datalist.component.css'],
  providers: [DatalistService]
})
export class DatalistComponent implements OnInit {
  lists = [];

  constructor( private _datalistService: DatalistService, private router: Router ) { }

  ngOnInit() {
  this._datalistService.getDatalists()
  .subscribe(resData => this.lists = resData);
  }

}
