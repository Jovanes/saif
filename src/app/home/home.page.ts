import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { AngularFireAuth } from "angularfire2/auth";
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private fire: AngularFireDatabase, private angularfireauth: AngularFireAuth, private rota: Router, private modal: ModalController) {

    
  }

}
