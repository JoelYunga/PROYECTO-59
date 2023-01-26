import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NivRepasarEsPage } from './niv-repasar-es.page';

const routes: Routes = [
  {
    path: '',
    component: NivRepasarEsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NivRepasarEsPageRoutingModule {}
