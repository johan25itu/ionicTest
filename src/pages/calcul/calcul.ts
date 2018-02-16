import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { JoueurModel } from '../../models/joueur.model';
import { JoueurService } from '../../services/joueur.service';
import { CalculModel } from '../../models/calcul.model';
import { CalculService } from '../../services/calcul.service';
import { Body } from '@angular/http/src/body';

@Component({

  selector: 'menu-calcul',
  templateUrl: 'calcul.html'
})
export class CalculPage {

  joueurModel: JoueurModel;
  calculModel: CalculModel;
  param:any;
  Reponse:number;
  
  constructor(public navCtrl: NavController,calculService : CalculService, public navParam:NavParams, private joueurService: JoueurService) {
    this.param = this.navParam.get('prm');
    this.calculModel = new CalculModel();
    calculService.getCalcul()
    .then(newFetched => {this.calculModel = newFetched;
    //console.log(this.param._nom);
  });
}

valider(apiReponse, apiPoints)
{
  
  if(this.Reponse == apiReponse)
  {
    var newPoints = apiPoints + this.param._points;
    this.param = this.navParam.get('prm');
    this.joueurModel = new JoueurModel(this.param._nom, this.param._mail, this.param._pass, newPoints);
    this.joueurService.update(this.joueurModel);
    this.navCtrl.push(CalculPage, this.joueurModel)
  }
  else this.navCtrl.push(CalculPage, this.param);
}
}
