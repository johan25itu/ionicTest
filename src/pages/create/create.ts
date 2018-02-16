import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Http } from '@angular/http'
import { JoueurModel } from '../../models/joueur.model'
import { JoueurService } from '../../services/joueur.service'
import { Body } from '@angular/http/src/body';

@Component({
  selector: 'page-create',
  templateUrl: 'create.html'
})
export class CreatePage {

  Nom: string;
  Mail: string;
  Pass: string;
  joueur: JoueurModel
  http: Http
  
  constructor(public navCtrl: NavController, public alerCtrl: AlertController, private joueurService: JoueurService) {

  }

  private doAlert(titre:string, message:string){
    let alert = this.alerCtrl.create({
        title: titre,
        message: message,
        buttons: ['Ok']
    });
    alert.present()
}

  create()
  {
    let x = new JoueurModel(this.Nom, this.Mail, this.Pass,0);
    this.joueurService.inserer(x);
    console.log(JSON.stringify(x));
  }
}
