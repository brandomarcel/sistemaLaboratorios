import { Materia } from './../../models/materia';
import { MateriaService } from './../../servicios/materia.service';
import { Component, OnInit, Input } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-materia-nuevo',
  templateUrl: './materia-nuevo.page.html',
  styleUrls: ['./materia-nuevo.page.scss'],
})
export class MateriaNuevoPage implements OnInit {
  @Input() nuevo: boolean;
  @Input() materia: Materia;
  @Input() docente: [];


  RespuestaPostLaboratorio:any=[];


  constructor(private materiaService:MateriaService,
    private modalController:ModalController,
    private toastController:ToastController) { }

  ngOnInit() {
  
    if(this.nuevo){
      console.log('Nuevo');
     
    }else{
      
      console.log('Actualizar');
      
      console.log(this.materia);
     //this.cargarLaboratorios();
    }
  
  }

  regresarBTN(){
    this.modalController.dismiss();

  }
  guardarMateria(){
    if (this.nuevo){
      this.GuardarNuevo();
    }else{
      this.GuardarACT();
    }
   
  }

  GuardarNuevo(){
    
    let materia:Materia={
      
      nombre:(<HTMLSelectElement>document.getElementById("txtNombre")).value.toUpperCase(),
      idDocente:(<HTMLSelectElement>document.getElementById("combotipolab")).value,
      idNivel:Number.parseInt((<HTMLSelectElement>document.getElementById("comboDisponibilidad")).value),   
              
    };
    
    console.log(materia);
         
    if(materia.nombre.toString().length==0){
      this.presentToast('Ingrese Nombre');
      }else{
        this.materiaService.postmateria(materia).subscribe(
          res => {
            console.log(res)
            this.RespuestaPostLaboratorio = res;
            
            
            
            //this.lisUsuarios = res;
            //alert(this.lisUsuarios.HttpResponse.statusText);

            if(this.RespuestaPostLaboratorio.HttpResponse.statusText === "success"){
             
              this.modalController.dismiss(res);
            }else{
              
              
              this.presentToast(this.RespuestaPostLaboratorio.HttpResponse.message);
            }
            
          }
        );
     
        }
    
  }





  GuardarACT(){
    let materia:Materia={
      id:this.materia.id,
     nombre:(<HTMLSelectElement>document.getElementById("txtNombre")).value.toUpperCase(),
      idDocente:(<HTMLSelectElement>document.getElementById("combotipolab")).value,
      idNivel:Number.parseInt((<HTMLSelectElement>document.getElementById("comboDisponibilidad")).value),   
          
    };

    
    console.log(materia);

    if(materia.nombre.length==  0){
      
      this.presentToast('Ingrese Ubicacion');
      
    }else{
      this.materiaService.putMateria(materia).subscribe(
        res => {
          console.log(res)
          this.RespuestaPostLaboratorio = res;
          
        
         if(this.RespuestaPostLaboratorio.HttpResponse.statusText === "success"){
             
          this.presentToast(this.RespuestaPostLaboratorio.HttpResponse.message);
            this.modalController.dismiss({res});

          }else{
            
            
            this.presentToast(this.RespuestaPostLaboratorio.HttpResponse.message);
          }
        
        } 
        
      );
      }
  }





  async presentToast(msj: string) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 3000,
      position:'bottom'
    });
    toast.present();
  }
}
