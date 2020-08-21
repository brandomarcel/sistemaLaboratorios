import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvitadosPageRoutingModule } from './invitados-routing.module';

import { InvitadosPage } from './invitados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvitadosPageRoutingModule
  ],
  declarations: [InvitadosPage]
})
export class InvitadosPageModule {}
