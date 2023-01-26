import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaNivelesPage } from './lista-niveles.page';

const routes: Routes = [
  {
    path: '',
    component: ListaNivelesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaNivelesPageRoutingModule {}
