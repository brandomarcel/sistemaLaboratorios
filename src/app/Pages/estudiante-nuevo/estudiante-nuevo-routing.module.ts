import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstudianteNuevoPage } from './estudiante-nuevo.page';

const routes: Routes = [
  {
    path: '',
    component: EstudianteNuevoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstudianteNuevoPageRoutingModule {}
