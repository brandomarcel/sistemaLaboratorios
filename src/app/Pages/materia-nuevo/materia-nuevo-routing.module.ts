import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MateriaNuevoPage } from './materia-nuevo.page';

const routes: Routes = [
  {
    path: '',
    component: MateriaNuevoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MateriaNuevoPageRoutingModule {}
