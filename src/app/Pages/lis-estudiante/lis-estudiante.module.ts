import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LisEstudiantePageRoutingModule } from './lis-estudiante-routing.module';

import { LisEstudiantePage } from './lis-estudiante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LisEstudiantePageRoutingModule
  ],
  declarations: [LisEstudiantePage]
})
export class LisEstudiantePageModule {}
