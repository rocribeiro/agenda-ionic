import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContatoService } from '../../app/contato.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  contatos;
  constructor(public navCtrl: NavController, public contatoService:ContatoService) {
    this.contatos = this.contatoService.contatos;
  }

  onItemClick (contato){
    this.navCtrl.push ('DetailPage', {contatoParam: contato });
  }

}
