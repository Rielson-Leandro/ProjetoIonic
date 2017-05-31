import { ResultadosPage } from './../resultados/resultados';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-pesquisa-avancada',
  templateUrl: 'pesquisa-avancada.html',
})
export class PesquisaAvancadaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

   resultado(){
    this.navCtrl.push(ResultadosPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PesquisaAvancadaPage');
  }

}
