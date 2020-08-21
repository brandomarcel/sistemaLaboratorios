import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerDisponiblesPageRoutingModule } from './ver-disponibles-routing.module';

import { VerDisponiblesPage } from './ver-disponibles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerDisponiblesPageRoutingModule
  ],
  declarations: [VerDisponiblesPage]
})
export class VerDisponiblesPageModule {}
