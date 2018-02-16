import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Http } from '@angular/http'
import { IntrusModel } from '../../models/intrus.model'
import { IntrusService } from '../../services/intrus.service'
import { Body } from '@angular/http/src/body';

@Component({
  selector: 'menu-intrus',
  templateUrl: 'Intrus.html'
})
export class IntrusPage {
  
  intrusModel: IntrusModel;
  param:any
  
  constructor(public navCtrl: NavController, public alerCtrl: AlertController, intrusService : IntrusService,public navParam:NavParams) {
    this.param = this.navParam.get('prm');
    this.intrusModel = new IntrusModel();
    intrusService.getIntrus()
    .then(newFetched => {this.intrusModel = newFetched;
    console.log(this.param);
  });
}
}