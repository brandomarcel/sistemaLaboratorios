import  swal  from 'Sweetalert';

import { Usuario } from './../../models/usuario';
import { UsuarioService } from './../../servicios/usuario.service';
import { ModalController,ToastController } from '@ionic/angular';
import { Component, OnInit,Input } from '@angular/core';
import { NUMBER_TYPE, ifStmt } from '@angular/compiler/src/output/output_ast';




@Component({
  selector: 'app-usuario-nuevo',
  templateUrl: './usuario-nuevo.page.html',
  styleUrls: ['./usuario-nuevo.page.scss'],
})
export class UsuarioNuevoPage implements OnInit {
  @Input() nuevo: boolean;
 
  lisUsuarios:any=[];

  @Input() usuario: Usuario;

  constructor(public modalController: ModalController, public toastController:ToastController,public usuarioService:UsuarioService) { }

  ngOnInit() {
    if(this.nuevo){
      console.log('Nuevo');
    }else{
      
      console.log('Actualizar');
      (<HTMLSelectElement>document.getElementById("txtCedula")).disabled=true;
      console.log(this.usuario);
      this.cargarUsuarios();
    }
  }


  GuardarUsuario(){
    if (this.nuevo){
      this.GuardarNuevo();
    }else{
      this.GuardarACT();
    }
   
  }


  cargarUsuarios(){
    (<HTMLSelectElement>document.getElementById("txtCedula")).value = this.usuario.id;
    (<HTMLSelectElement>document.getElementById("txtNombre")).value = this.usuario.nombre ;
    (<HTMLSelectElement>document.getElementById("txtApellido")).value = this.usuario.apellido;
    (<HTMLSelectElement>document.getElementById("txtDireccion")).value = this.usuario.direccion;
    (<HTMLSelectElement>document.getElementById("txtTelefono")).value = this.usuario.telefono;
   
    (<HTMLSelectElement>document.getElementById("txtEmail")).value = this.usuario.email;
    
  }

  regresarBTN(){
    this.modalController.dismiss();

  }

  GuardarNuevo(){
    
    let usu:Usuario={
      id:(<HTMLSelectElement>document.getElementById("txtCedula")).value,
      nombre:(<HTMLSelectElement>document.getElementById("txtNombre")).value.toUpperCase(),
      apellido:(<HTMLSelectElement>document.getElementById("txtApellido")).value.toUpperCase(),
      email:(<HTMLSelectElement>document.getElementById("txtEmail")).value,
      telefono:(<HTMLSelectElement>document.getElementById("txtTelefono")).value,
      direccion:(<HTMLSelectElement>document.getElementById("txtDireccion")).value ,
      password:"nada",
      tipoUsuario:"LABORATORISTA"
        
    };
    
    console.log(usu);
 
        
        this.usuarioService.postUsuario(usu).subscribe(
          res => {
            
           
            this.lisUsuarios = res;
            if (this.lisUsuarios.HttpResponse.statusText == "success") {
              this.modalController.dismiss({res});
              this.alertaInsertado();
              
              
              
            }else{
              this.presentToast(this.lisUsuarios.HttpResponse.message);
    
            }
            
            //alert(this.lisMensaje.HttpResponse.statusText);
            
          }
          
    
        );

    
  }
  async presentToast(msj: string) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 5000
    });
    toast.present();
  }



  GuardarACT(){
    let usu:Usuario={
      id:(<HTMLSelectElement>document.getElementById("txtCedula")).value,
      nombre:(<HTMLSelectElement>document.getElementById("txtNombre")).value.toUpperCase(),
      apellido:(<HTMLSelectElement>document.getElementById("txtApellido")).value.toUpperCase(),
      email:(<HTMLSelectElement>document.getElementById("txtEmail")).value,
      telefono:(<HTMLSelectElement>document.getElementById("txtTelefono")).value,
      direccion:(<HTMLSelectElement>document.getElementById("txtDireccion")).value ,
      password:"nada",
      tipoUsuario:"LABORATORISTA"
        
    };
    
    console.log(usu);

  
      this.usuarioService.putUsuario(usu).subscribe(
        res => {
            
           
          this.lisUsuarios = res;
          if (this.lisUsuarios.HttpResponse.statusText == "success") {
            this.modalController.dismiss({res});
            this.alertaActualizado();
            
            
            
          }else{
            this.presentToast(this.lisUsuarios.HttpResponse.message);
  
          }
          
          //alert(this.lisMensaje.HttpResponse.statusText);
          
        }
        
  
      );
    
  }
  

  

  alertaInsertado(){

    swal({
      title: "Usuario creado!",
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
  alertaActualizado(){

    swal({
      title: "Usuario actualizado!",
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
  


}
