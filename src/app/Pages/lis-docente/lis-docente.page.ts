import { UsuariostodosService } from './../../servicios/usuariostodos.service';
import { ModalController } from '@ionic/angular';
import { DocenteService } from './../../servicios/docente.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-lis-docente',
  templateUrl: './lis-docente.page.html',
  styleUrls: ['./lis-docente.page.scss'],
})
export class LisDocentePage implements OnInit {


  LisDocente:any=[];
  
  LisDocenteAux:any=[];
  tipo:string="";

  constructor(private docenteService:DocenteService, 
    private modalController:ModalController,
    private usuariostodosService:UsuariostodosService) { }

  ngOnInit() {
   // console.log(this.cargarDocentes)
    this.cargarDocentes();
  }
  selecDocente(docen){
  
    this.modalController.dismiss({
      nuevo: 0,
      docente:docen
    });
  }
  cargarDocentes(){
    this.tipo="Docente";
    this.usuariostodosService.getUsuarioxTipo(this.tipo).subscribe(
      res => {
        this.LisDocente = res;
        this.LisDocenteAux = res;
        console.log(this.LisDocente)
      },
      err => console.log(err)
    );
}
regresarBTN() {
  this.modalController.dismiss();
}


checkDocente($event: KeyboardEvent) {


  this.LisDocente=this.LisDocenteAux;

  let value = (<HTMLInputElement>event.target).value;
 
    const result = this.LisDocente.usuariostodos.filter(docen => docen.id.toString().search(value)==0 
                                         || docen.nombre.toString().toUpperCase().search(value.toUpperCase())==0 
                                         || docen.apellido.toString().toUpperCase().search(value.toUpperCase())==0
                                     
                                          );
                                                                            
  this.LisDocente=result;
  this.LisDocente.usuariostodos=result;
  
  

}


}
