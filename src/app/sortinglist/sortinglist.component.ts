import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {  SortinglistService } from'./sortinglist.service';
import * as _ from "lodash";
import { Router } from '@angular/router';

@Component({
  selector: 'app-sortinglist',
  templateUrl: './sortinglist.component.html',
  styleUrls: ['./sortinglist.component.css'],
  providers: [SortinglistService]
})
export class SortinglistComponent implements OnInit {
 lists = [];
  constructor( private _sortinglistService: SortinglistService, private router: Router ) { }

  ngOnInit() {
    this._sortinglistService.getSortinglists()
    .subscribe(resData => this.lists = resData);
    }

}
