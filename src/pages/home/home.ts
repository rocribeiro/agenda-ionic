import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  notes = [
    {
      id: '1',
      date: '2016-02-01',
      title: 'Firebase',
      content: "Que tal programar serverless?" 
    },
    {
      id: '2',
      date: '2016-02-03',
      title: "Ionic",
      content: "Aprenda o básico de Ionic"
    },
    {
      id: "3",
      date: '2016-08-01',
      title: "Angular",
      content: "Importante para desenvolver com Ionic"
    }
  ]

  constructor(public navCtrl: NavController) {

  }

  onItemClick (note){
    //console.log ('item-click', note);
    this.navCtrl.push ('DetailPage', {noteParam: note });
  }

}
