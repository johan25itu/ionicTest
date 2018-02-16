import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Http } from '@angular/http'
import { ManquantModel } from '../../models/manquant.model'
import { ManquantService } from '../../services/manquant.service'
import { Body } from '@angular/http/src/body';
import { CreatePage } from '../create/create';

@Component({
  selector: 'manquant-home',
  templateUrl: 'manquant.html'
})
export class ManquantPage {

  manquantModel:ManquantModel
  param:any;

  constructor(public navCtrl: NavController, public alerCtrl: AlertController, manquantService:ManquantService, public navParam:NavParams ) {
    this.param = this.navParam.get('prm');
    this.manquantModel = new ManquantModel();
    manquantService.getManquant()
    .then(newFetched => {this.manquantModel = newFetched;
    console.log(this.param);
  });
}
}