import { ModalController, ToastController } from '@ionic/angular';
import { Component, OnInit,Input} from '@angular/core';
import { Usuariostodos } from './../../models/usuariostodos';
import { UsuariostodosService } from './../../servicios/usuariostodos.service';

@Component({
  selector: 'app-invitadonuevo',
  templateUrl: './invitadonuevo.page.html',
  styleUrls: ['./invitadonuevo.page.scss'],
})
export class InvitadonuevoPage implements OnInit {
  ListEstudiante:any=[];
  @Input() nuevo: boolean;
  @Input() invitado: Usuariostodos;
  constructor(private usuariostodosService:UsuariostodosService, private modalController:ModalController,
    private toastController:ToastController) { }

  ngOnInit() {

    if(this.nuevo){
      console.log('Nuevo');
    }else{
      
      console.log('Actualizar');
      (<HTMLSelectElement>document.getElementById("txtCedula")).disabled=true;
      console.log(this.invitado);
     this.cargarEstudiantes();
    }
  }


  cargarEstudiantes(){
    (<HTMLSelectElement>document.getElementById("txtCedula")).value = this.invitado.id;
    (<HTMLSelectElement>document.getElementById("txtNombre")).value = this.invitado.nombre ;
    (<HTMLSelectElement>document.getElementById("txtApellido")).value = this.invitado.apellido;

  }


  
  GuardarEstudiante(){
    if (this.nuevo){
      this.GuardarNuevo();
    }else{
      this.GuardarACT();
    }
   
  }

  regresarBTN(){
    this.modalController.dismiss();

  }

  GuardarNuevo(){
    
    let estudiante:Usuariostodos={
      id:(<HTMLSelectElement>document.getElementById("txtCedula")).value,
      nombre:(<HTMLSelectElement>document.getElementById("txtNombre")).value.toUpperCase(),
      apellido:(<HTMLSelectElement>document.getElementById("txtApellido")).value.toUpperCase(),
      tipo:"Invitado"
        
    };
    console.log("Ve como entra los datos estudiante");

    console.log(estudiante);

  

      if(estudiante.id.toString().length==0){
        this.presentToast('Ingrese Cedula');
      }else if(estudiante.nombre.length==0){
        this.presentToast('Ingrese Nombre');
      }else if(estudiante.apellido.length==0){
        this.presentToast('Ingrese Apellido');
      }else{
        this.usuariostodosService.postUsuariostodos(estudiante).subscribe(
          res => {
            console.log(res)
            this.modalController.dismiss({res});
            
            //this.lisUsuarios = res;
            //alert(this.lisUsuarios.HttpResponse.statusText);
          },
          err =>{ console.log(err);
  
            this.ListEstudiante = err;
  
      alert(this.ListEstudiante.HttpResponse.statusText);
  
            this.presentToast('Error al guardar');
          }
          
        );
      }

    
  }

  GuardarACT(){
    let estudiante:Usuariostodos={
      id:(<HTMLSelectElement>document.getElementById("txtCedula")).value,
      nombre:(<HTMLSelectElement>document.getElementById("txtNombre")).value.toUpperCase(),
      apellido:(<HTMLSelectElement>document.getElementById("txtApellido")).value.toUpperCase()
  
        
    };
    
    console.log(estudiante);

    if(estudiante.id.toString().length==0){
      this.presentToast('Ingrese Cedula');
    }else if(estudiante.nombre.length==0){
      this.presentToast('Ingrese Nombre');
    }else if(estudiante.apellido.length==0){
      this.presentToast('Ingrese Apellido');
   
    }else{
      this.usuariostodosService.putUsuariostodos(estudiante).subscribe(
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
