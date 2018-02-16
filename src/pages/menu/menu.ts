import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Http } from '@angular/http'
import { Body } from '@angular/http/src/body';
import { CalculPage } from '../calcul/calcul';
import { TrisPage } from '../tris/tris';
import { ManquantPage } from '../manquant/manquant';
import { IntrusPage } from '../intrus/intrus';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})

export class MenuPage {

  param: any;
  
  constructor(public navCtrl: NavController, public alerCtrl: AlertController, private navParamas:NavParams) {
    this.param = navParamas.get('data');
    console.log(this.param);
  }

  calcul()
  {
    let prm = this.navParamas.get('data');
    this.navCtrl.push(CalculPage, {prm});
  }

  tri()
  {
    let prm = this.navParamas.get('data');
    this.navCtrl.push(TrisPage, {prm});
  }

  manquant()
  {
    let prm = this.navParamas.get('data');
    this.navCtrl.push(ManquantPage, {prm});
  }

  intrus()
  {
    let prm = this.navParamas.get('data');
    this.navCtrl.push(IntrusPage, {prm});
  } 

}