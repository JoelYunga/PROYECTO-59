import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NivWritePage } from './niv-write.page';

const routes: Routes = [
  {
    path: '',
    component: NivWritePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NivWritePageRoutingModule {}
