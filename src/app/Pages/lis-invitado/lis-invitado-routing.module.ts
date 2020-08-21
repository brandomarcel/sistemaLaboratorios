import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LisInvitadoPage } from './lis-invitado.page';

const routes: Routes = [
  {
    path: '',
    component: LisInvitadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LisInvitadoPageRoutingModule {}
