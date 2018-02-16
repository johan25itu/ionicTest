import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MenuPage } from '../pages/menu/menu';
import { CreatePage } from '../pages/create/create';

import { IntrusPage } from '../pages/intrus/intrus';
import { ManquantPage } from '../pages/manquant/manquant';
import { TrisPage } from '../pages/tris/tris';
import { CalculPage } from '../pages/calcul/calcul';

import { HttpModule } from '@angular/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ManquantService } from '../services/manquant.service';
import { IntrusService } from '../services/intrus.service';
import { TrisService } from '../services/tri.service'
import { JoueurService } from '../services/joueur.service';
import { CalculService } from '../services/calcul.service';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    
    HomePage,
    CreatePage,
    MenuPage,

    IntrusPage,
    ManquantPage,
    TrisPage,
    CalculPage,

    TabsPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    CreatePage,
    MenuPage,

    IntrusPage,
    ManquantPage,
    TrisPage,
    CalculPage,


    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,

    JoueurService,
    CalculService,
    IntrusService,
    ManquantService,
    TrisService,
    
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
