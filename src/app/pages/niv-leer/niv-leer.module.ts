import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NivLeerPageRoutingModule } from './niv-leer-routing.module';

import { NivLeerPage } from './niv-leer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NivLeerPageRoutingModule
  ],
  declarations: [NivLeerPage]
})
export class NivLeerPageModule {}
