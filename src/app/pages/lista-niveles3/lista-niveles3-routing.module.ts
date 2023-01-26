import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaNiveles3Page } from './lista-niveles3.page';

const routes: Routes = [
  {
    path: '',
    component: ListaNiveles3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaNiveles3PageRoutingModule {}
