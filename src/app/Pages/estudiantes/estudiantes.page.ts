import { Usuariostodos } from './../../models/usuariostodos';
import { UsuariostodosService } from './../../servicios/usuariostodos.service';
import { Estudiante } from './../../models/estudiante';
import { EstudianteService } from './../../servicios/estudiante.service';
import { EstudianteNuevoPage } from './../estudiante-nuevo/estudiante-nuevo.page';
import { ModalController,AlertController,ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.page.html',
  styleUrls: ['./estudiantes.page.scss'],
})
export class EstudiantesPage implements OnInit {

  LisEstudiante:any=[];
  LisEstudianteAux:any=[];

  constructor(private modalController:ModalController,public estudianteService:EstudianteService,
    private alertController:AlertController, private toastController:ToastController,
    public usuariostodosService:UsuariostodosService) { }

  ngOnInit() {
    this.cargarEstudiante();
  }

  cargarEstudiante(){
    this.usuariostodosService.getUsuarioxTipo("Estudiante").subscribe(res => {
    
      this.LisEstudiante =res;
      this.LisEstudianteAux = res;

      //para alertar si se guardo o no
     // alert(this.lisUsu.HttpResponse.statusText);
    },
    err => console.log(err)
    );
  }
  
  async mostrarNuevo() {
    const modal = await this.modalController.create({
      component: EstudianteNuevoPage,
      componentProps: {
        nuevo: true
      }
  
    });
    await modal.present();
  
    const { data } = await modal.onDidDismiss();
  
    try {
  
        
      this.cargarEstudiante();
  
  
    } catch (error) {
      console.log('error');
    }
  }



  async EditarEstudiante(estudiante:Estudiante){
    const modal = await this.modalController.create({
      component: EstudianteNuevoPage,
      componentProps: {
        nuevo: false,
        estudiante:estudiante
     
        
      }
  
    });
    await modal.present();
  
    const { data } = await modal.onDidDismiss();
  
    try {
  
        
      this.cargarEstudiante();
  
  
    } catch (error) {
      console.log('error');
    }
  }

  checkEstudiante($event: KeyboardEvent) {


    this.LisEstudiante=this.LisEstudianteAux;

    let value = (<HTMLInputElement>event.target).value;
   
      const result = this.LisEstudiante.usuariostodos.filter(estu => estu.id.toString().search(value)==0 
                                           || estu.nombre.toString().toUpperCase().search(value.toUpperCase())==0 
                                           || estu.apellido.toString().toUpperCase().search(value.toUpperCase())==0
                                       
                                            );
                                                                              
    this.LisEstudiante=result;
    this.LisEstudiante.usuariostodos=result;
    

    
    
  
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
                this.cargarEstudiante();
             
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
