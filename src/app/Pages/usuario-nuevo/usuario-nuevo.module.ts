import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioNuevoPageRoutingModule } from './usuario-nuevo-routing.module';

import { UsuarioNuevoPage } from './usuario-nuevo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioNuevoPageRoutingModule
  ],
  declarations: [UsuarioNuevoPage]
})
export class UsuarioNuevoPageModule {}
