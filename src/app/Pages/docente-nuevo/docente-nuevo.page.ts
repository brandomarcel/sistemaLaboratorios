import { DocenteService } from './../../servicios/docente.service';
import { Docente } from './../../models/docente';
import { ModalController,ToastController } from '@ionic/angular';
import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-docente-nuevo',
  templateUrl: './docente-nuevo.page.html',
  styleUrls: ['./docente-nuevo.page.scss'],
})
export class DocenteNuevoPage implements OnInit {
@Input() docente:Docente;
@Input() nuevo: boolean;


  ListDocente:any=[];
  constructor(private modalController:ModalController,private toastController:ToastController,private docenteService:DocenteService) { }

  ngOnInit() {

    if(this.nuevo){
      console.log('Nuevo');
    }else{
      
      console.log('Actualizar');
      (<HTMLSelectElement>document.getElementById("txtCedula")).disabled=true;
      console.log(this.docente);
     this.cargarDocentes();
    }


  }

  GuardarDocente(){
    if (this.nuevo){
      this.GuardarNuevo();
    }else{
      this.GuardarACT();
    }
   
  }

  regresarBTN(){
    this.modalController.dismiss();

  }

  cargarDocentes(){
    (<HTMLSelectElement>document.getElementById("txtCedula")).value = this.docente.id;
    (<HTMLSelectElement>document.getElementById("txtNombre")).value = this.docente.nombre ;
    (<HTMLSelectElement>document.getElementById("txtApellido")).value = this.docente.apellido;

  }

  GuardarNuevo(){
    
    let docente:Docente={
      id:(<HTMLSelectElement>document.getElementById("txtCedula")).value,
      nombre:(<HTMLSelectElement>document.getElementById("txtNombre")).value.toUpperCase(),
      apellido:(<HTMLSelectElement>document.getElementById("txtApellido")).value.toUpperCase()
  
        
    };
    
    console.log(docente);

  

    if(docente.id.toString().length==0){
      this.presentToast('Ingrese Cedula');
      }else if(docente.apellido.length==0){
        this.presentToast('Ingrese Apellido');
      }else{
        this.docenteService.postDocente(docente).subscribe(
          res => {
            console.log(res)
            this.modalController.dismiss({res});
            
            //this.lisUsuarios = res;
            //alert(this.lisUsuarios.HttpResponse.statusText);
          },
          err =>{ console.log(err);
  
            this.ListDocente = err;
  
      alert(this.ListDocente.HttpResponse.statusText);
  
            this.presentToast('Error al guardar');
          }
          
        );
      }

    
  }



  GuardarACT(){
    let docente:Docente={
      id:(<HTMLSelectElement>document.getElementById("txtCedula")).value,
      nombre:(<HTMLSelectElement>document.getElementById("txtNombre")).value.toUpperCase(),
      apellido:(<HTMLSelectElement>document.getElementById("txtApellido")).value.toUpperCase()
  
        
    };
    
    console.log(docente);

    if(docente.id.toString().length==0){
      this.presentToast('Ingrese Cedula');
    }else if(docente.nombre.length==0){
      this.presentToast('Ingrese Nombre');
    }else if(docente.apellido.length==0){
      this.presentToast('Ingrese Apellido');
   
    }else{
      this.docenteService.putDocente(docente).subscribe(
        res => {
          console.log(res)
          this.modalController.dismiss({res});
          
          //this.lisUsuarios = res;
          //alert(this.lisUsuarios.HttpResponse.statusText);
        },
        err =>{ console.log(err);

          this.presentToast('Error al guardar');
        }
        
      );
    }
  }
  


  async presentToast(msj: string) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 5000
    });
    toast.present();
  }



}
