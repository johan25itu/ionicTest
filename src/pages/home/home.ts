import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Http } from '@angular/http'
import { JoueurModel } from '../../models/joueur.model'
import { JoueurService } from '../../services/joueur.service'
import { Body } from '@angular/http/src/body';
import { CreatePage } from '../create/create';
import { MenuPage } from '../menu/menu'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

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

  login()
  {
    let x = new JoueurModel('NULL', this.Mail, this.Pass, 0);
    this.joueurService.find(x)
      .then(data=>{
        if(data!=null)
        {
          this.navCtrl.push(MenuPage,{data});
        } 
        else this.doAlert("Eurreur","Login ou mot de passe incorrect");
      });
  }

  create()
  {
    this.navCtrl.setRoot(CreatePage);
  }
}
