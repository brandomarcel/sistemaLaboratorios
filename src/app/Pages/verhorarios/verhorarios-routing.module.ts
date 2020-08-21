import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerhorariosPage } from './verhorarios.page';

const routes: Routes = [
  {
    path: '',
    component: VerhorariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerhorariosPageRoutingModule {}
