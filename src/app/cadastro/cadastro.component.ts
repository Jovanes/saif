import { Component, OnInit } from '@angular/core';
import { Cadastro } from '../entidade/cadastro';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { AngularFireAuth } from "angularfire2/auth";
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
  providers: [AngularFireAuth],

})
export class CadastroComponent implements OnInit {
  cadastro: Cadastro = new Cadastro();

  constructor(private fire: AngularFireDatabase, private angularfireauth: AngularFireAuth, private rota: Router, private modal: ModalController) { }

  ngOnInit() {

  }

  salvar() {
    this.angularfireauth.auth.createUserWithEmailAndPassword(this.cadastro.email, this.cadastro.senha).then(
      () => { this.rota.navigate(['cadastro']); }
    ).catch((erro) => alert('erro'));
    alert("Cadastro feito com sucesso");

    if (this.cadastro.key == null) {
      this.fire.list('cadastro').push(this.cadastro);
      this.cadastro = new Cadastro();
      this.rota.navigate(['cadastro']);
    } else {
      this.fire.object('cadastro/' + this.cadastro.key).update(this.cadastro);
      this.modal.dismiss();
    }





  }

}
