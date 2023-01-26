import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuRepasarPageRoutingModule } from './menu-repasar-routing.module';

import { MenuRepasarPage } from './menu-repasar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuRepasarPageRoutingModule
  ],
  declarations: [MenuRepasarPage]
})
export class MenuRepasarPageModule {}
