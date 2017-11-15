import { Injectable } from '@angular/core';
import {Http, Response, Request, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { CategoryList} from './categorylist';

@Injectable()
export class CategorylistService {
  private _url = "../assets/data.json"
  constructor(private _http:Http) {}
  
  getCategorylists(): Observable<any>{
      return this._http.get(this._url).map((response: Response) => response.json());
  }
}
  
