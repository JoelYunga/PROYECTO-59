import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscrituraPage } from './escritura.page';

const routes: Routes = [
  {
    path: '',
    component: EscrituraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscrituraPageRoutingModule {}
