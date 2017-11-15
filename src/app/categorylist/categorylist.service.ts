import { Injectable } from '@angular/core';
import {Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class CategorylistService {
  private _url = "api/data.json"
  constructor(private _http:Http) {}
  
  getCategorylists(): Observable<any>{
      return this._http.get(this._url).map((response: Response) => response.json());
  }
}
  
