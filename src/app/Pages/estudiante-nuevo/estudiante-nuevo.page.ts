import { Usuariostodos } from './../../models/usuariostodos';
import { UsuariostodosService } from './../../servicios/usuariostodos.service';
import { Estudiante } from './../../models/estudiante';
import { EstudianteService } from './../../servicios/estudiante.service';
import { ModalController,ToastController } from '@ionic/angular';
import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-estudiante-nuevo',
  templateUrl: './estudiante-nuevo.page.html',
  styleUrls: ['./estudiante-nuevo.page.scss'],
})
export class EstudianteNuevoPage implements OnInit {

  ListEstudiante:any=[];
  @Input() nuevo: boolean;
  @Input() estudiante: Estudiante;
  
  constructor(private modalController:ModalController,
    private toastController:ToastController,
    private usuariostodosService:UsuariostodosService,
    private estudianteService:EstudianteService) { }

  ngOnInit() {

    if(this.nuevo){
      console.log('Nuevo');
    }else{
      
      console.log('Actualizar');
      (<HTMLSelectElement>document.getElementById("txtCedula")).disabled=true;
      console.log(this.estudiante);
     this.cargarEstudiantes();
    }

  }

  cargarEstudiantes(){
    (<HTMLSelectElement>document.getElementById("txtCedula")).value = this.estudiante.id;
    (<HTMLSelectElement>document.getElementById("txtNombre")).value = this.estudiante.nombre ;
    (<HTMLSelectElement>document.getElementById("txtApellido")).value = this.estudiante.apellido;

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
      tipo:"Estudiante"
        
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
    let estudiante:Estudiante={
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
