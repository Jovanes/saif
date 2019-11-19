import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {FormsModule} from '@angular/forms';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import {TelainicialComponent} from './telainicial/telainicial.component';
import { SolicitarComponent } from './solicitar/solicitar.component';
import { AngularFireAuth } from 'angularfire2/auth';

@NgModule({
  declarations: [AppComponent, CadastroComponent, TelainicialComponent, SolicitarComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, AngularFireDatabaseModule,
  AngularFireModule.initializeApp({
    apiKey: "AIzaSyCZCxn5lX7mbTVnPKmU38F-msj33gn2WyY",
  authDomain: "saif-d219c.firebaseapp.com",
  databaseURL: "https://saif-d219c.firebaseio.com",
  projectId: "saif-d219c",
  storageBucket: "saif-d219c.appspot.com",
  messagingSenderId: "788667068283",
  appId: "1:788667068283:web:957b31b3266bf3158457de"
  })
],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireAuth,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
