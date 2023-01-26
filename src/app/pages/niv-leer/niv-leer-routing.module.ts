import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NivLeerPage } from './niv-leer.page';

const routes: Routes = [
  {
    path: '',
    component: NivLeerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NivLeerPageRoutingModule {}
