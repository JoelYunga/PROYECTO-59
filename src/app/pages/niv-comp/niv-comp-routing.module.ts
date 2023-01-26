import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NivCompPage } from './niv-comp.page';

const routes: Routes = [
  {
    path: '',
    component: NivCompPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NivCompPageRoutingModule {}
