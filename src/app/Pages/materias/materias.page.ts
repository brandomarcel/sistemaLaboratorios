import { DocenteService } from './../../servicios/docente.service';
import { MateriaNuevoPage } from './../materia-nuevo/materia-nuevo.page';
import { ModalController,ToastController,AlertController  } from '@ionic/angular';
import { Materia } from './../../models/materia';
import { MateriaService } from './../../servicios/materia.service';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-materias',
  templateUrl: './materias.page.html',
  styleUrls: ['./materias.page.scss'],
})
export class MateriasPage implements OnInit {

LisMateria:any=[];
LisMateriaAux:any=[];
LisDocentes:any=[];

  constructor(private modalController:ModalController,
    private toastController:ToastController,
    private alertController:AlertController,
    private materiaService:MateriaService,
    private docenteService:DocenteService) { }

  ngOnInit() {
    this.cargarMateria();
    this.cargarDocentes();
  }

  cargarDocentes(){
    this.docenteService.getDocente().subscribe(
      res => {
        this.LisDocentes = res;
        console.log(this.LisDocentes);
      },
      err => console.log(err)
    );
}


  async editarMateria(materia:Materia){
    const modal = await this.modalController.create({
      component: MateriaNuevoPage,
      componentProps: {
        nuevo: false,
        materia:materia
        //tipoLaboratorios:this.LisTipolaboratorios
        
      }
  
    });
    await modal.present();
  
    const { data } = await modal.onDidDismiss();
  
    try {
  
        
      this.cargarMateria();
  
  
    } catch (error) {
      console.log('error');
    }
  }

  cargarMateria(){
    this.materiaService.getMateria().subscribe(res => {
    
      this.LisMateria =res;
      this.LisMateriaAux=res;
      
      console.log(this.LisMateria)
      //para alertar si se guardo o no
     // alert(this.lisUsu.HttpResponse.statusText);
    },
    err => console.log(err)
    );
  }


  async mostrarNuevo() {
    const modal = await this.modalController.create({
      component: MateriaNuevoPage,
      componentProps: {
        nuevo: true,
       docente:this.LisDocentes
      }
  
    });
    await modal.present();
  
    const { data } = await modal.onDidDismiss();
  
    try {
  
        
      this.cargarMateria();
  
  
    } catch (error) {
      console.log('error');
    }
  }

  
  async eliminarMateria(id:Materia){
    const alert = await this.alertController.create({
      header: 'Eliminar',
      message: 'Seguro que desea eliminar esta materia',
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
            this.materiaService.DelMateria(id).subscribe(
              res => {
                this.cargarMateria();
             
                this.presentToast("Materia Eliminada...");
                
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
