import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepasarWritePage } from './repasar-write.page';

const routes: Routes = [
  {
    path: '',
    component: RepasarWritePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepasarWritePageRoutingModule {}
