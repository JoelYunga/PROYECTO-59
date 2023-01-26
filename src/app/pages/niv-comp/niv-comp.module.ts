import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NivCompPageRoutingModule } from './niv-comp-routing.module';

import { NivCompPage } from './niv-comp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NivCompPageRoutingModule
  ],
  declarations: [NivCompPage]
})
export class NivCompPageModule {}
