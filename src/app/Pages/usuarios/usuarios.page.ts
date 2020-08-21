import  swal  from 'Sweetalert';
import { Usuario } from './../../models/usuario';
import { UsuarioNuevoPage } from './../usuario-nuevo/usuario-nuevo.page';
import { ModalController,ToastController } from '@ionic/angular';
import { UsuarioService } from './../../servicios/usuario.service';
import { Component, OnInit,Input } from '@angular/core';
import { AlertController } from '@ionic/angular';





@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  lisUsu:any=[];
  lisUsuAux:any=[];
  mensaje:any=[];


  constructor(private alertController: AlertController,public serUsu:UsuarioService,public modalController:ModalController,public toastController:ToastController) { }

  ngOnInit() {
   
      this.cargarUsuarios();
    
  }

  cargarUsuarios(){
    this.serUsu.getUsuario().subscribe(res => {
      console.log(res)
      this.lisUsu =res;
  this.lisUsuAux = this.lisUsu;
      //para alertar si se guardo o no
     // alert(this.lisUsu.HttpResponse.statusText);
    },
    err => console.log(err)
    );
  }

  
  async mostrarNuevo() {
    const modal = await this.modalController.create({
      component: UsuarioNuevoPage,
      componentProps: {
        nuevo: true
      }
  
    });
    await modal.present();
  
    const { data } = await modal.onDidDismiss();
  
    try {
  
        
      this.cargarUsuarios();
  
  
    } catch (error) {
      console.log('error');
    }
  }

  async EditarUsuario(usu:Usuario){
    const modal = await this.modalController.create({
      component: UsuarioNuevoPage,
      componentProps: {
        nuevo: false,
        usuario:usu
      }
  
    });
    await modal.present();
  
    const { data } = await modal.onDidDismiss();
  
    try {
  
        
      this.cargarUsuarios();
  
  
    } catch (error) {
      console.log('error');
    }
  }


  checkUsuario($event: KeyboardEvent) {


    this.lisUsu=this.lisUsuAux;

    let value = (<HTMLInputElement>event.target).value;
   
      const result = this.lisUsu.usuario.filter(estu => estu.id.toString().search(value)==0 
                                           || estu.nombre.toString().toUpperCase().search(value.toUpperCase())==0 
                                           || estu.apellido.toString().toUpperCase().search(value.toUpperCase())==0
                                       
                                            );
                                                                              
    this.lisUsu=result;
    this.lisUsu.usuario=result;
    

    
    
  
  }






  async eliminarUsuario(id:Usuario){
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
            this.serUsu.DelUsuarios(id).subscribe(
              res => {
                this.cargarUsuarios();
             this.alertaEliminado();
              //this.presentToast("Usuario Eliminado...");
                
              },
              err => console.log(err)
            );
  
  
  
  
  
          }
        }
      ]
    });
  
    await alert.present();
  }


  alertaEliminado(){

    swal({
      title: "Usuario Eliminado!",
      //text: "You clicked the button!",
      buttons: {
        cancel: {
          text: "Cancel",
          value: null,
          visible: false,
          className: "",
          closeModal: true,
        },
        confirm: {
          text: "OK",
          value: true,
          visible: false,
          className: "",
          closeModal: true
        }
      },
      icon: "success",
      timer: 4000
    });

  }

  

  async presentToast(msj: string) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 5000
    });
    toast.present();
  }





}
