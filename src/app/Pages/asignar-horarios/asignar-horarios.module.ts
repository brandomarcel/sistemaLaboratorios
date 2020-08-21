import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsignarHorariosPageRoutingModule } from './asignar-horarios-routing.module';

import { AsignarHorariosPage } from './asignar-horarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsignarHorariosPageRoutingModule
  ],
  declarations: [AsignarHorariosPage]
})
export class AsignarHorariosPageModule {}
