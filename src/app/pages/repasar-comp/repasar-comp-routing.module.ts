import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepasarCompPage } from './repasar-comp.page';

const routes: Routes = [
  {
    path: '',
    component: RepasarCompPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepasarCompPageRoutingModule {}
