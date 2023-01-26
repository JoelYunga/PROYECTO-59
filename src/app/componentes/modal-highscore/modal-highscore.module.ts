import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalHighscorePageRoutingModule } from './modal-highscore-routing.module';

import { ModalHighscorePage } from './modal-highscore.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalHighscorePageRoutingModule
  ],
  declarations: [ModalHighscorePage]
})
export class ModalHighscorePageModule {}
