import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LisDocentePage } from './lis-docente.page';

const routes: Routes = [
  {
    path: '',
    component: LisDocentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LisDocentePageRoutingModule {}
