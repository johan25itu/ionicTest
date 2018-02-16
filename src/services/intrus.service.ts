import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { IntrusModel } from '../models/intrus.model';

@Injectable()
export class IntrusService
{
  private baseUrl: string = 'http://localhost:4567/findAllIntrus' ;
  constructor(private http: Http)
  {

  }
  public getIntrus():any
  {
    var url = this.baseUrl;
    return this.http.get(url)
    .toPromise()
    .then(response => response.json() as IntrusModel)
    .catch(error => console.log('Eurreur ' + error))
  }
}
