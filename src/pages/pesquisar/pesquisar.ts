import { PesquisaAvancadaPage } from './../pesquisa-avancada/pesquisa-avancada';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-pesquisar',
  templateUrl: 'pesquisar.html',
})
export class PesquisarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  pesquisaAvacada(){
    this.navCtrl.push(PesquisaAvancadaPage);
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad PesquisarPage');
  }

}
