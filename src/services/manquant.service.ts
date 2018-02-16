import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { ManquantModel } from '../models/manquant.model';

@Injectable()
export class ManquantService
{
  private baseUrl: string = 'http://localhost:4567/findAllManquant' ;
  constructor(private http: Http)
  {

  }
  public getManquant():any
  {
    var url = this.baseUrl;
    return this.http.get(url)
    .toPromise()
    .then(response => response.json() as ManquantModel)
    .catch(error => console.log('Eurreur ' + error))
  }
}
