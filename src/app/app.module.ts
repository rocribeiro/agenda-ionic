import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {ContatoService} from './contato.service';
import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database'
const firebaseConfig = {
  apiKey: "AIzaSyD5USL1DWN3VrHJzgcYVX2BVvWnCSmJueE",
  authDomain: "dplistadecontatos.firebaseapp.com",
  databaseURL: "https://dplistadecontatos.firebaseio.com",
  projectId: "dplistadecontatos",
  storageBucket: "dplistadecontatos.appspot.com",
  messagingSenderId: "1005343980955",
  appId: "1:1005343980955:web:aa230d9901c66a9ea4753e",
  measurementId: "G-TX3XD74CHF"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
  AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ContatoService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
