import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgresoPage } from './progreso.page';

const routes: Routes = [
  {
    path: '',
    component: ProgresoPage,
    children: [
      {
        path: 'read',
        loadChildren: () => import('../lectura/lectura.module').then( m => m.LecturaPageModule )
      },
      {
        path: 'write',
        loadChildren: () => import('../escritura/escritura.module').then( m => m.EscrituraPageModule )
      },
      {
        path: 'pronounce',
        loadChildren: () => import('../pronun/pronun.module').then( m => m.PronunPageModule )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgresoPageRoutingModule {}
