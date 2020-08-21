import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstudianteNuevoPageRoutingModule } from './estudiante-nuevo-routing.module';

import { EstudianteNuevoPage } from './estudiante-nuevo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstudianteNuevoPageRoutingModule
  ],
  declarations: [EstudianteNuevoPage]
})
export class EstudianteNuevoPageModule {}
