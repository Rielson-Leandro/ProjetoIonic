import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResultadoExibePage } from './resultado-exibe';

@NgModule({
  declarations: [
    ResultadoExibePage,
  ],
  imports: [
    IonicPageModule.forChild(ResultadoExibePage),
  ],
  exports: [
    ResultadoExibePage
  ]
})
export class ResultadoExibePageModule {}
