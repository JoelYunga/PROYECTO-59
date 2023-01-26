import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RepasarWritePageRoutingModule } from './repasar-write-routing.module';

import { RepasarWritePage } from './repasar-write.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RepasarWritePageRoutingModule
  ],
  declarations: [RepasarWritePage]
})
export class RepasarWritePageModule {}
