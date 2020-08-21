import { Usuariostodos } from './../../models/usuariostodos';
import { Invitado } from './../../models/invitado';
import { InvitadonuevoPage } from './../invitadonuevo/invitadonuevo.page';
import { UsuariostodosService } from './../../servicios/usuariostodos.service';

import { InvitadoService } from './../../servicios/invitado.service';
import { ModalController, ToastController, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-invitados',
  templateUrl: './invitados.page.html',
  styleUrls: ['./invitados.page.scss'],
})
export class InvitadosPage implements OnInit {


  LisInvitado:any=[];
  LisInvitadoAux:any=[];
  tipo:any;

  constructor(private modalController:ModalController,
    private alertController:AlertController, private toastController:ToastController,
    public invitadoService:InvitadoService,
    public usuariostodosService:UsuariostodosService) { }

  ngOnInit() {
    this.cargarEstudiantes();
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
  
  async mostrarNuevo() {
    const modal = await this.modalController.create({
      component: InvitadonuevoPage,
      componentProps: {
        nuevo: true
      }
  
    });
    await modal.present();
  
    const { data } = await modal.onDidDismiss();
  
    try {
  
        
      this.cargarEstudiantes();
  
  
    } catch (error) {
      console.log('error');
    }
  }



  async EditarInvitado(invitado:Invitado){
    const modal = await this.modalController.create({
      component: InvitadonuevoPage,
      componentProps: {
        nuevo: false,
        invitado:invitado
     
        
      }
  
    });
    await modal.present();
  
    const { data } = await modal.onDidDismiss();
  
    try {
  
        
      this.cargarEstudiantes();
  
  
    } catch (error) {
      console.log('error');
    }
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

  
  async eliminarEstudiante(id:Usuariostodos){
    const alert = await this.alertController.create({
      header: 'Eliminar',
      message: 'Seguro que desea eliminar este usuario',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('cancelar');
          }
        }, {
          text: 'Eliminar',
          handler: () => {
            console.log('Eliminar');
            console.log(id);
            this.usuariostodosService.DelEstudiante(id).subscribe(
              res => {

                console.log(res);
                this.cargarEstudiantes();
             
                this.presentToast("Estudiante Eliminado...");
                
              },
              err => console.log(err)
            );
  
  
  
  
  
          }
        }
      ]
    });
  
    await alert.present();
  }

  async presentToast(msj: string) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 5000
    });
    toast.present();
  }



}
