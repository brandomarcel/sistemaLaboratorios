import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocenteNuevoPageRoutingModule } from './docente-nuevo-routing.module';

import { DocenteNuevoPage } from './docente-nuevo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocenteNuevoPageRoutingModule
  ],
  declarations: [DocenteNuevoPage]
})
export class DocenteNuevoPageModule {}
