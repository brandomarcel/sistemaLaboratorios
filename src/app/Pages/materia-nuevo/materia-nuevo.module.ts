import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MateriaNuevoPageRoutingModule } from './materia-nuevo-routing.module';

import { MateriaNuevoPage } from './materia-nuevo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MateriaNuevoPageRoutingModule
  ],
  declarations: [MateriaNuevoPage]
})
export class MateriaNuevoPageModule {}
