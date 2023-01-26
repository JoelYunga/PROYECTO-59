import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RepasarLecPageRoutingModule } from './repasar-lec-routing.module';

import { RepasarLecPage } from './repasar-lec.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RepasarLecPageRoutingModule
  ],
  declarations: [RepasarLecPage]
})
export class RepasarLecPageModule {}
