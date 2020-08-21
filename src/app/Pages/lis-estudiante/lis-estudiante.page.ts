
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { UsuariostodosService } from './../../servicios/usuariostodos.service';

@Component({
  selector: 'app-lis-estudiante',
  templateUrl: './lis-estudiante.page.html',
  styleUrls: ['./lis-estudiante.page.scss'],
})
export class LisEstudiantePage implements OnInit {

  LisEstudiante:any=[];
  LisEstudianteAux:any=[];
  tipo:string="";


  constructor(private modalController:ModalController,
      private usuariostodosService:UsuariostodosService) { }

  ngOnInit() {
    this.cargarEstudiantes();
  }


  selecEstudiante(estu){
  
    this.modalController.dismiss({
      nuevo: 0,
      estudiante:estu
    });
  }
  cargarEstudiantes(){
    this.tipo="Estudiante";
    this.usuariostodosService.getUsuarioxTipo(this.tipo).subscribe(
      res => {
        this.LisEstudiante = res;
        this.LisEstudianteAux = res;

      },
      err => console.log(err)
    );
}
regresarBTN() {
  this.modalController.dismiss();
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


}
