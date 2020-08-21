import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LisInvitadoPageRoutingModule } from './lis-invitado-routing.module';

import { LisInvitadoPage } from './lis-invitado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LisInvitadoPageRoutingModule
  ],
  declarations: [LisInvitadoPage]
})
export class LisInvitadoPageModule {}
