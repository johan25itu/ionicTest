import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {HomePage} from '../pages/home/home'
import { CreatePage } from '../pages/create/create'
import {MenuPage} from '../pages/menu/menu'
import { IntrusPage } from '../pages/intrus/intrus';
import { ManquantPage } from '../pages/manquant/manquant';
import { TrisPage } from '../pages/tris/tris';
import { CalculPage } from '../pages/calcul/calcul';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
