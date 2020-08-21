//import { TipolaboratorioService } from './../../servicios/tipolaboratorio.service';
import { LaboratorioService } from './../../servicios/laboratorio.service';
import { Laboratorio } from './../../models/laboratorio';

import { ModalController, ToastController } from '@ionic/angular';
import { Component, OnInit,Input } from '@angular/core';
import { importExpr, ifStmt } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-laboratorio-nuevo',
  templateUrl: './laboratorio-nuevo.page.html',
  styleUrls: ['./laboratorio-nuevo.page.scss'],
})
export class LaboratorioNuevoPage implements OnInit {
  @Input() nuevo: boolean;
  @Input() laboratorio: Laboratorio;
  @Input() tipoLaboratorios: [];

  LisLaboratorios:any=[];
  LisTipolaboratorios:any=[];
  RespuestaPostLaboratorio:any=[];


  constructor(private modalController:ModalController,
    private toastController:ToastController,
    private laboratorioService:LaboratorioService) { }

   ngOnInit() {
    //this.cargarTipolaboratorios();
    //console.log("Lista Lab");
    //console.log(this.tipoLaboratorios);
    if(this.nuevo){
      console.log('Nuevo');
      //this.cargarTipolaboratorios();
    }else{
      
      console.log('Actualizar');
      
      console.log(this.laboratorio);
     this.cargarLaboratorios();
    }
  }

  regresarBTN(){
    this.modalController.dismiss();

  }
  tiplabSelected() {
  
  }

 /* cargarTipolaboratorios(){
    this.tipolaboratorioService.getTipolaboratorio().subscribe(
      res => {
        this.LisTipolaboratorios = res;
        console.log(this.LisTipolaboratorios);
      },
      err => console.log(err)
    );
}

*/



  cargarLaboratorios(){
    (<HTMLSelectElement>document.getElementById("txtNombre")).value = this.laboratorio.nombre;
    (<HTMLSelectElement>document.getElementById("combotipolab")).value = this.laboratorio.idlab.toString();
    (<HTMLSelectElement>document.getElementById("txtCapacidad")).value = this.laboratorio.capacidad.toString() ;
    (<HTMLSelectElement>document.getElementById("comboDisponibilidad")).value = this.laboratorio.disponibilidad.toString();
    (<HTMLSelectElement>document.getElementById("txtUbicacion")).value=this.laboratorio.ubicacion.toString();

  }

  GuardarLaboratorio(){
    if (this.nuevo){
      this.GuardarNuevo();
    }else{
      this.GuardarACT();
    }
   
  }


  

  GuardarNuevo(){
    
    let laboratorio:Laboratorio={
      
      nombre:(<HTMLSelectElement>document.getElementById("txtNombre")).value.toUpperCase(),
      capacidad: Number.parseFloat((<HTMLSelectElement>document.getElementById("txtCapacidad")).value),
      ubicacion:(<HTMLSelectElement>document.getElementById("txtUbicacion")).value,
      tipo: Number.parseFloat((<HTMLSelectElement>document.getElementById("combotipolab")).value),
      
      disponibilidad:(<HTMLSelectElement>document.getElementById("comboDisponibilidad")).value,
      
      
 
        
    };
    
    console.log(laboratorio);
         
    if(laboratorio.nombre.toString().length==0){
      this.presentToast('Ingrese Nombre');

      }else if(laboratorio.ubicacion.toString().length==0){
        this.presentToast('Ingrese Ubicacion');

      }else if(laboratorio.capacidad.toString().length == 0){
        this.presentToast('Ingrese capacidad');

      }else{
        this.laboratorioService.postLaboratorio(laboratorio).subscribe(
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
    let laboratorio:Laboratorio={
      id:this.laboratorio.id,
      nombre:(<HTMLSelectElement>document.getElementById("txtNombre")).value.toUpperCase(),
      //nombrelab:"",
      idlab:0,
      capacidad: Number.parseFloat((<HTMLSelectElement>document.getElementById("txtCapacidad")).value),
      ubicacion:(<HTMLSelectElement>document.getElementById("txtUbicacion")).value,
      tipo: Number.parseFloat((<HTMLSelectElement>document.getElementById("combotipolab")).value),
      
      disponibilidad:(<HTMLSelectElement>document.getElementById("comboDisponibilidad")).value
          
    };

    
    console.log(laboratorio);

    if(laboratorio.nombre.length==  0){
      
      this.presentToast('Ingrese Ubicacion');
      
    }else{
      this.laboratorioService.putLaboratorio(laboratorio).subscribe(
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
