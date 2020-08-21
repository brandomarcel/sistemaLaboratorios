import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LisEstudiantePage } from './lis-estudiante.page';

const routes: Routes = [
  {
    path: '',
    component: LisEstudiantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LisEstudiantePageRoutingModule {}
