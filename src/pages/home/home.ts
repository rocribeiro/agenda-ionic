import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContatoService } from '../../app/contato.service';
import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  contatos;
  constructor(public navCtrl: NavController, public contatoService:ContatoService,db:AngularFireDatabase) {
    //console.log(db);
    //this.contatos = this.contatoService.contatos;
  }

  ngOnInit (){
    this.contatos = this.contatoService.fetchContatos();
   }
   

  onItemClick (contato){
    this.navCtrl.push ('DetailPage', {contatoParam: contato });
  }

}
