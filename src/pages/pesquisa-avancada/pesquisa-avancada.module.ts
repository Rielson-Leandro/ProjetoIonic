import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PesquisaAvancadaPage } from './pesquisa-avancada';

@NgModule({
  declarations: [
    PesquisaAvancadaPage,
  ],
  imports: [
    IonicPageModule.forChild(PesquisaAvancadaPage),
  ],
  exports: [
    PesquisaAvancadaPage
  ]
})
export class PesquisaAvancadaPageModule {}
