import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Http } from '@angular/http'
import { TrisModel } from '../../models/tris.model'
import { TrisService } from '../../services/tri.service'
import { Body } from '@angular/http/src/body';
import { CreatePage } from '../create/create';

@Component({
  selector: 'menu-tris',
  templateUrl: 'tris.html'
})
export class TrisPage {

  trisModel: TrisModel;
  param:any
  
  constructor(public navCtrl: NavController, public alerCtrl: AlertController,  trisService : TrisService, public navParam: NavParams ) {
    this.param = this.navParam.get('prm');
    this.trisModel = new TrisModel();
    trisService.getTris()
    .then(newFetched => {this.trisModel = newFetched;
    console.log(this.param);
  });
  }
}