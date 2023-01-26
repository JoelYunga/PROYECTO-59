import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PronunPage } from './pronun.page';

const routes: Routes = [
  {
    path: '',
    component: PronunPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PronunPageRoutingModule {}
