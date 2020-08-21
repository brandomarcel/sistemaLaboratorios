import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaboratorioNuevoPage } from './laboratorio-nuevo.page';

const routes: Routes = [
  {
    path: '',
    component: LaboratorioNuevoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaboratorioNuevoPageRoutingModule {}
