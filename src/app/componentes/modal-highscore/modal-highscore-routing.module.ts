import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalHighscorePage } from './modal-highscore.page';

const routes: Routes = [
  {
    path: '',
    component: ModalHighscorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalHighscorePageRoutingModule {}
