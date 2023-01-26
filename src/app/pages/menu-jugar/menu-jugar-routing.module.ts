import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuJugarPage } from './menu-jugar.page';

const routes: Routes = [
  {
    path: '',
    component: MenuJugarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuJugarPageRoutingModule {}
