import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RepasarCompPageRoutingModule } from './repasar-comp-routing.module';

import { RepasarCompPage } from './repasar-comp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RepasarCompPageRoutingModule
  ],
  declarations: [RepasarCompPage]
})
export class RepasarCompPageModule {}
