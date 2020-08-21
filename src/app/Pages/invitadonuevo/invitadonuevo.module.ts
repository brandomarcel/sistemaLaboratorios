import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvitadonuevoPageRoutingModule } from './invitadonuevo-routing.module';

import { InvitadonuevoPage } from './invitadonuevo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvitadonuevoPageRoutingModule
  ],
  declarations: [InvitadonuevoPage]
})
export class InvitadonuevoPageModule {}
