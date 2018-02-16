import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { TrisModel } from '../models/tris.model';

@Injectable()
export class TrisService
{
  private baseUrl: string = 'http://localhost:4567/findAllTri' ;
  constructor(private http: Http)
  {

  }
  public getTris():any
  {
    var url = this.baseUrl;
    return this.http.get(url)
    .toPromise()
    .then(response => response.json() as TrisModel)
    .catch(error => console.log('Eurreur ' + error))
  }
}
