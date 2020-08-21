import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvitadosPage } from './invitados.page';

const routes: Routes = [
  {
    path: '',
    component: InvitadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvitadosPageRoutingModule {}
