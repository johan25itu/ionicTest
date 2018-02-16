import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { CalculModel } from '../models/calcul.model'

@Injectable()
export class CalculService
{
  private baseUrl: string = 'http://localhost:4567/findAllCalcul' ;
  constructor(private http: Http)
  {

  }
  public getCalcul():any
  {
    var url = this.baseUrl;
    return this.http.get(url)
    .toPromise()
    .then(response => response.json() as CalculModel)
    .catch(error => console.log('Eurreur ' + error))
  }
}
