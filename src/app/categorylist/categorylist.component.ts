import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {CategorylistService} from'./categorylist.service';
@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.css'],
})
export class CategorylistComponent implements OnInit {
  lists = []
  constructor(private _categorylistService : CategorylistService) { }

  ngOnInit() {
    this._categorylistService.getCategorylists()
    .subscribe(resData => this.lists = resData);
  }

}
