import { InvitadoService } from './../../servicios/invitado.service';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { UsuariostodosService } from './../../servicios/usuariostodos.service';

@Component({
  selector: 'app-lis-invitado',
  templateUrl: './lis-invitado.page.html',
  styleUrls: ['./lis-invitado.page.scss'],
})
export class LisInvitadoPage implements OnInit {

  LisInvitado:any=[];
  LisInvitadoAux:any=[];
  tipo:string="";
  constructor(private modalController:ModalController,
    private usuariostodosService:UsuariostodosService) { }

  ngOnInit() {
    this.cargarEstudiantes();
  }




  selecInvitado(invi){
  
    this.modalController.dismiss({
      nuevo: 0,
      invitado:invi
    });
  }
  cargarEstudiantes(){

    this.tipo="Invitado";
    this.usuariostodosService.getUsuarioxTipo(this.tipo).subscribe(
      res => {
        console.log(res);
        this.LisInvitado = res;
        this.LisInvitadoAux = res;

      },
      err => console.log(err)
    );
}
regresarBTN() {
  this.modalController.dismiss();
}

checkInvitado($event: KeyboardEvent) {


  this.LisInvitado=this.LisInvitadoAux;

  let value = (<HTMLInputElement>event.target).value;
 
    const result = this.LisInvitado.usuariostodos.filter(invi => invi.id.toString().search(value)==0 
                                         || invi.nombre.toString().toUpperCase().search(value.toUpperCase())==0 
                                         || invi.apellido.toString().toUpperCase().search(value.toUpperCase())==0
                                     
                                          );
                                                                            
  this.LisInvitado=result;
  this.LisInvitado.usuariostodos=result;
  
  

}


}
