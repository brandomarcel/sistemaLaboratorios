import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioNuevoPage } from './usuario-nuevo.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioNuevoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioNuevoPageRoutingModule {}
