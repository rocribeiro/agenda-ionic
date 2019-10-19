import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ContatoService } from '../../app/contato.service';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  contato;
  constructor(public navCtrl: NavController, public navParams: NavParams, private contatoService: ContatoService, private alertCtrl:AlertController) {
    this.contato = this.navParams.get("contatoParam");
    console.log('nav-param', this.contato);
  }

  onTrash() {
    let confirm = this.alertCtrl.create({
      title: "Excluir contato",
      message: `Quer mesmo excluir esse contato: "${this.contato.nome}"?`,
      buttons: [
        {
          text: "Não"
        },
        {
          text: "Sim",
          handler: () => {
            this.contatoService.removeContato(this.contato);
            this.navCtrl.pop();
          }
        }
      ]
    });
    //exibe
    confirm.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }


}
