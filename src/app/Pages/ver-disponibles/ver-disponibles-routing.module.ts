import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerDisponiblesPage } from './ver-disponibles.page';

const routes: Routes = [
  {
    path: '',
    component: VerDisponiblesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerDisponiblesPageRoutingModule {}
