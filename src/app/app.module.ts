import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

//Importamos os modulos pra trabalhar com o firebase
import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { ProdutoProvider } from '../providers/produto/produto'

// Initialize Firebase
export const config = {
    apiKey: "AIzaSyABfn_L87ZrCtJdlBsqsfn8MYv6u53N9mE",
    authDomain: "icomida-85df9.firebaseapp.com",
    databaseURL: "https://icomida-85df9.firebaseio.com",
    projectId: "icomida-85df9",
    storageBucket: "icomida-85df9.appspot.com",
    messagingSenderId: "290845290814"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    ProdutoProvider,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
