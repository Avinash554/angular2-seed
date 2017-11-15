import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {CategorylistService} from'./categorylist.service';
import {Router} from'@angular/router';
@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.css'],
  providers: [CategorylistService]
})
export class CategorylistComponent implements OnInit {
  lists = []
  constructor(private _categorylistService : CategorylistService, private router: Router) { }

  ngOnInit() {
    this._categorylistService.getCategorylists()
    .subscribe(resData => this.lists = resData);
  }

}
