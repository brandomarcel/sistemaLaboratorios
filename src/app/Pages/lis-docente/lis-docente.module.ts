import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LisDocentePageRoutingModule } from './lis-docente-routing.module';

import { LisDocentePage } from './lis-docente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LisDocentePageRoutingModule
  ],
  declarations: [LisDocentePage]
})
export class LisDocentePageModule {}
