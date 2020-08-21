import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsignarHorariosPage } from './asignar-horarios.page';

const routes: Routes = [
  {
    path: '',
    component: AsignarHorariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsignarHorariosPageRoutingModule {}
