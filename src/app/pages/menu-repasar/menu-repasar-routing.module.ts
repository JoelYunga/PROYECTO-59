import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuRepasarPage } from './menu-repasar.page';

const routes: Routes = [
  {
    path: '',
    component: MenuRepasarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuRepasarPageRoutingModule {}
