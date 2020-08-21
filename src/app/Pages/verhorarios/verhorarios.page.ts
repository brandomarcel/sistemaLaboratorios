import { ModalController } from '@ionic/angular';
import { ifStmt } from '@angular/compiler/src/output/output_ast';
import { VerhorariosService } from './../../servicios/verhorarios.service';
import { LaboratorioService } from './../../servicios/laboratorio.service';
import { HorarioService } from './../../servicios/horario.service';
import { DiaService } from './../../servicios/dia.service';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-verhorarios',
  templateUrl: './verhorarios.page.html',
  styleUrls: ['./verhorarios.page.scss'],
})
export class VerhorariosPage implements OnInit {

  LisLaboratorio:any=[];
  LisLaboratorioAux:any=[];
  LisHorarios:any=[];
  idLaboratorio:number;
  LisDia:any=[];
  LisDiaAux:any=[];
  nombreDia:string;
  LisDiasOcupados:any=[];
  LisDiasLibres:any=[];

  LisMostrarTodo:any=[];

  constructor(private laboratorioService:LaboratorioService,
    private diaService:DiaService,
    private HorarioService:HorarioService,
    private verhorariosService:VerhorariosService,
    private modalController:ModalController) { }
  ngOnInit() {
    this.cargarDia();
    this.cargarLaboratorio();
  }

  regresarBTN() {
    this.modalController.dismiss();
  }

  
  cargarLaboratorio(){

    this.laboratorioService.getLaboratorio().subscribe(
      res => {
        console.log(res);
        this.LisLaboratorio = res;
        
        (<HTMLSelectElement>document.getElementById("selLabver")).value = '';
        this.idLaboratorio = 0;
        
      },
      err => {
        console.log(err);

        // this.presentToast('Error al guardar');
      }

    );


  }

  cargarDia(){

    this.diaService.getDias().subscribe(
      res => {
        console.log(res);
        this.LisDia = res;
        
        (<HTMLSelectElement>document.getElementById("selLabver")).value = '';
        this.nombreDia = "";
      },
      err => {
        console.log(err);

        // this.presentToast('Error al guardar');
      }

    );


  }


  cargarDisponible(){

    this.verhorariosService.getLibres(Number.parseInt(this.nombreDia)).subscribe(
      res => {
        console.log(res);
        this.LisDiasLibres = res.horaslibres;
        console.log(this.LisDiasLibres);

        this.cargarOcupado();
        
      },
      err => {
        console.log(err);

        // this.presentToast('Error al guardar');
      }

    );


  }


  cargarOcupado(){

    this.verhorariosService.getOcupados(Number.parseInt(this.nombreDia),this.idLaboratorio).subscribe(
      res => {
        console.log(res);
        this.LisDiasOcupados = res.horarasOcupadas;
        console.log(this.LisDiasOcupados);
        
        this.unirListas();
      },
      err => {
        console.log(err);

        // this.presentToast('Error al guardar');
      }

    );


  }


 

  unirListas(){
    interface iaux {horaInicio:string,horaFin:string,nomMateria:string,nomDocente:string}

for (let index = 0; index < this.LisDiasLibres.length; index++) {
  let aux:iaux = {horaInicio:this.LisDiasLibres[index].horaInicio,
    horaFin:this.LisDiasLibres[index].horaFin,
    nomMateria:"",
    nomDocente:""}

    this.LisMostrarTodo.push(aux);

  
}
console.log(this.LisMostrarTodo);

for(let i=0;i<this.LisMostrarTodo.length;i++){
  for(let j=0;j<this.LisDiasOcupados.length;j++){
    console.log(this.LisMostrarTodo[i].horaInicio,this.LisDiasOcupados[j].horaInicio , this.LisMostrarTodo[i].horaFin ,this.LisDiasOcupados[j].horaFin);
    if(this.LisMostrarTodo[i].horaInicio==this.LisDiasOcupados[j].horaInicio && this.LisMostrarTodo[i].horaFin == this.LisDiasOcupados[j].horaFin){
      this.LisMostrarTodo[i].nomMateria=this.LisDiasOcupados[j].nomMateria;
      this.LisMostrarTodo[i].nomDocente=this.LisDiasOcupados[j].nomDocente;
      console.log('entro');
    }
  }
}
console.log("Lis MOstrar todo");
console.log(this.LisMostrarTodo);

  }




  laboratorioSelected() {
    this.LisMostrarTodo =[];
    var est = (<HTMLSelectElement>document.getElementById("selLabver")).value;
    
    this.idLaboratorio =Number.parseFloat(est);
    console.log("Laboratorio seleccionada");
    console.log(this.idLaboratorio);



  }

  diaSelected() {

    this.LisMostrarTodo =[];
    var est = (<HTMLSelectElement>document.getElementById("selDiaver")).value;
    
    this.nombreDia =est;
    console.log("Dia seleccionado");
    console.log(this.nombreDia);

   


    //Aqui va lo que me va a traer segun el dia
   
  }


  buscarHorarios() {
    
   this.cargarDisponible();
   

   
  }
}
