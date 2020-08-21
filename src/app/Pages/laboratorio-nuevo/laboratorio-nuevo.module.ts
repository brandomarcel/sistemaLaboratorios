import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaboratorioNuevoPageRoutingModule } from './laboratorio-nuevo-routing.module';

import { LaboratorioNuevoPage } from './laboratorio-nuevo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaboratorioNuevoPageRoutingModule
  ],
  declarations: [LaboratorioNuevoPage]
})
export class LaboratorioNuevoPageModule {}
