import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrestamoLabPage } from './prestamo-lab.page';

const routes: Routes = [
  {
    path: '',
    component: PrestamoLabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrestamoLabPageRoutingModule {}
