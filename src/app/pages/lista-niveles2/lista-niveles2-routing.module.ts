import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaNiveles2Page } from './lista-niveles2.page';

const routes: Routes = [
  {
    path: '',
    component: ListaNiveles2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaNiveles2PageRoutingModule {}
