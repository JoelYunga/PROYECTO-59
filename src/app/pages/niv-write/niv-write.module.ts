import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NivWritePageRoutingModule } from './niv-write-routing.module';

import { NivWritePage } from './niv-write.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NivWritePageRoutingModule
  ],
  declarations: [NivWritePage]
})
export class NivWritePageModule {}
