import { ResultadoExibePage } from './../resultado-exibe/resultado-exibe';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-resultados',
  templateUrl: 'resultados.html',
})
export class ResultadosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  resultado(){
    this.navCtrl.push(ResultadoExibePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultadosPage');
  }

}
