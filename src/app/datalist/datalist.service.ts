
import { Injectable } from '@angular/core';
import { Http, Headers, Response, Request} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { DataList } from './datalist';

@Injectable()
export class DatalistService {
    private _url = "../assets/data.json"
    constructor(private _http: Http) {}
    getDatalists(): Observable<any>{
        return this._http.get(this._url).map((response: Response) => response.json());
    }
   
}
