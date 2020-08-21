import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrestamoLabPageRoutingModule } from './prestamo-lab-routing.module';

import { PrestamoLabPage } from './prestamo-lab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrestamoLabPageRoutingModule
  ],
  declarations: [PrestamoLabPage]
})
export class PrestamoLabPageModule {}
