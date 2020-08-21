import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocenteNuevoPage } from './docente-nuevo.page';

const routes: Routes = [
  {
    path: '',
    component: DocenteNuevoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocenteNuevoPageRoutingModule {}
