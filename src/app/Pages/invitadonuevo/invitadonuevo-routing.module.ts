import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvitadonuevoPage } from './invitadonuevo.page';

const routes: Routes = [
  {
    path: '',
    component: InvitadonuevoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvitadonuevoPageRoutingModule {}
