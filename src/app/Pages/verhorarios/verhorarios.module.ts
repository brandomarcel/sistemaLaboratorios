import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerhorariosPageRoutingModule } from './verhorarios-routing.module';

import { VerhorariosPage } from './verhorarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerhorariosPageRoutingModule
  ],
  declarations: [VerhorariosPage]
})
export class VerhorariosPageModule {}
