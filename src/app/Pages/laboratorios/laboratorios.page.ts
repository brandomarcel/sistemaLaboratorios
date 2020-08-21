import { TipolaboratorioService } from './../../servicios/tipolaboratorio.service';
import { LaboratorioNuevoPage } from './../laboratorio-nuevo/laboratorio-nuevo.page';
import { Laboratorio } from './../../models/laboratorio';
import { LaboratorioService } from './../../servicios/laboratorio.service';
import { ModalController,ToastController,AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';





@Component({
  selector: 'app-laboratorios',
  templateUrl: './laboratorios.page.html',
  styleUrls: ['./laboratorios.page.scss'],
})
export class LaboratoriosPage implements OnInit {

  LisLaboratorio:any=[];
  LisLaboratorioAux:any=[];
  LisTipolaboratorios:any=[];
  
  constructor(private modalController:ModalController, private laboratorioService:LaboratorioService,
    private toastController:ToastController,
    private tipolaboratorioService:TipolaboratorioService,
    private alertController:AlertController) { }

  ngOnInit() {
    this.cargarLaboratorio();
    this.cargarTipolaboratorios();
  }


  async mostrarNuevo() {
    const modal = await this.modalController.create({
      component: LaboratorioNuevoPage,
      componentProps: {
        nuevo: true,
        tipoLaboratorios:this.LisTipolaboratorios
      }
  
    });
    await modal.present();
  
    const { data } = await modal.onDidDismiss();
  
    try {
  
        
      this.cargarLaboratorio();
  
  
    } catch (error) {
      console.log('error');
    }
  }



  cargarTipolaboratorios(){
    this.tipolaboratorioService.getTipolaboratorio().subscribe(
      res => {
        this.LisTipolaboratorios = res;
        console.log(this.LisTipolaboratorios);
      },
      err => console.log(err)
    );
}










  cargarLaboratorio(){
    this.laboratorioService.getLaboratorio().subscribe(res => {
    
      this.LisLaboratorio =res;
      this.LisLaboratorioAux=res;
      
      console.log(this.LisLaboratorio)
      //para alertar si se guardo o no
     // alert(this.lisUsu.HttpResponse.statusText);
    },
    err => console.log(err)
    );
  }


  async EditarLaboratorio(laboratorio:Laboratorio){
    const modal = await this.modalController.create({
      component: LaboratorioNuevoPage,
      componentProps: {
        nuevo: false,
        laboratorio:laboratorio,
        tipoLaboratorios:this.LisTipolaboratorios
        
      }
  
    });
    await modal.present();
  
    const { data } = await modal.onDidDismiss();
  
    try {
  
        
      this.cargarLaboratorio();
  
  
    } catch (error) {
      console.log('error');
    }
  }



  checkLaboratorio($event: KeyboardEvent) {


    this.LisLaboratorio=this.LisLaboratorioAux;
    

    let value = (<HTMLInputElement>event.target).value;
   
      const result = this.LisLaboratorio.laboratorio.filter(labo => labo.id.toString().search(value)==0 
                                           || labo.nombre.toString().toUpperCase().search(value.toUpperCase())==0 
                                           || labo.capacidad.toString().toUpperCase().search(value.toUpperCase())==0
                                           || labo.disponibilidad.toString().toUpperCase().search(value.toUpperCase())==0
                                         
                                            );
                                                                              
    this.LisLaboratorio=result;
    this.LisLaboratorio.laboratorio=result;
    
    
  
  }



  async eliminarLaboratorio(id:Laboratorio){
    const alert = await this.alertController.create({
      header: 'Eliminar',
      message: 'Seguro que desea eliminar este laboratorio',
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
            this.laboratorioService.DelLaboratorio(id).subscribe(
              res => {
                this.cargarLaboratorio();
             
                this.presentToast("Laboratorio Eliminado...");
                
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
