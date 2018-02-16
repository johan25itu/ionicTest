import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import {JoueurModel} from '../models/joueur.model'
import { Body } from '@angular/http/src/body';

@Injectable()
export class JoueurService{

    private burl = "http://localhost:4567";

    constructor(private http:Http){

    }

    public inserer(joueur:JoueurModel):Promise<any>
    {
        var surl = "/add-joueur";
        var url = this.burl + surl;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let joueurJSON = JSON.stringify(joueur);
        return this.http.post(url,joueurJSON,options).toPromise();
    }

    public find(joueur:JoueurModel)
    {
        var surl = "/find-Joueur";
        var url = this.burl + surl;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let joueurJSON = JSON.stringify(joueur);
        return this.http.post(url,joueurJSON,options)
        .toPromise()
        .then(response => response.json());
    }

    public update(joueur:any):Promise<any>{
        var surl = "/update-Joueur";
        var url = this.burl + surl;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.put(url,joueur,options)
        .toPromise()
    }
}