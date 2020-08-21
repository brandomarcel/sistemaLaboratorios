import { Docente } from './../../models/docente';
import { DocenteNuevoPage } from './../docente-nuevo/docente-nuevo.page';

import { ModalController,AlertController,ToastController } from '@ionic/angular';
import { DocenteService } from './../../servicios/docente.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-docentes',
  templateUrl: './docentes.page.html',
  styleUrls: ['./docentes.page.scss'],
})
export class DocentesPage implements OnInit {

  LisDocentes:any=[];
  constructor(private modalController:ModalController,private alertController:AlertController,private toastController:ToastController,private docenteService:DocenteService) { }

  ngOnInit() {
   this.cargarDocentes();
  }

  cargarDocentes(){
    this.docenteService.getDocente().subscribe(res => {
      console.log(res)
      this.LisDocentes =res;

      //para alertar si se guardo o no
     // alert(this.lisUsu.HttpResponse.statusText);
    },
    err => console.log(err)
    );
  }
  
  async mostrarNuevo() {
    const modal = await this.modalController.create({
      component: DocenteNuevoPage,
      componentProps: {
        nuevo: true
      }
  
    });
    await modal.present();
  
    const { data } = await modal.onDidDismiss();
  
    try {
  
        
      this.cargarDocentes();
  
  
    } catch (error) {
      console.log('error');
    }
  }




  async EditarDocente(docente:Docente){
    const modal = await this.modalController.create({
      component: DocenteNuevoPage,
      componentProps: {
        nuevo: false,
        docente:docente
     
        
      }
  
    });
    await modal.present();
  
    const { data } = await modal.onDidDismiss();
  
    try {
  
        
      this.cargarDocentes();
  
  
    } catch (error) {
      console.log('error');
    }
  }




  async eliminarDocente(id:Docente){
    const alert = await this.alertController.create({
      header: 'Eliminar',
      message: 'Seguro que desea eliminar este docente',
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
            this.docenteService.DelDocente(id).subscribe(
              res => {
                
             
                this.presentToast("Docente Eliminado...");
                this.cargarDocentes();
                
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
