import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuJugarPageRoutingModule } from './menu-jugar-routing.module';

import { MenuJugarPage } from './menu-jugar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuJugarPageRoutingModule
  ],
  declarations: [MenuJugarPage]
})
export class MenuJugarPageModule {}
