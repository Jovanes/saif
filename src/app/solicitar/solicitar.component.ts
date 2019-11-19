import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Solicitar } from './entidade/solicitar';

@Component({
  selector: 'app-solicitar',
  templateUrl: './solicitar.component.html',
  styleUrls: ['./solicitar.component.scss'],
})
export class SolicitarComponent implements OnInit {
  
solicitar: Solicitar = new Solicitar;

  constructor(private fire: AngularFireDatabase) { }

  ngOnInit() {}


salvar(){

this.fire.list('solicitar').push(this.solicitar);
this.solicitar= new Solicitar();
alert('Enviado com sucesso');


}





}
