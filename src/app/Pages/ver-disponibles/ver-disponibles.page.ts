import { ifStmt } from '@angular/compiler/src/output/output_ast';


import { HorarioService } from './../../servicios/horario.service';
import { DiaService } from './../../servicios/dia.service';
import { Laboratorio } from './../../models/laboratorio';
import { LaboratorioService } from './../../servicios/laboratorio.service';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-ver-disponibles',
  templateUrl: './ver-disponibles.page.html',
  styleUrls: ['./ver-disponibles.page.scss'],
})
export class VerDisponiblesPage implements OnInit {

  LisLaboratorio:any=[];
  LisLaboratorioAux:any=[];
  LisHorarios:any=[];
  idLaboratorio:number;
  LisDia:any=[];
  LisDiaAux:any=[];
  nombreDia:string;
  constructor(private laboratorioService:LaboratorioService,
    private diaService:DiaService,
    private HorarioService:HorarioService) { }

  ngOnInit() {
    this.cargarLaboratorio();
    this.cargarDia();
  
  

  }

 



  cargarLaboratorio(){

    this.laboratorioService.getLaboratorioDisponibilidad().subscribe(
      res => {
        console.log(res);
        this.LisLaboratorio = res;
        
        (<HTMLSelectElement>document.getElementById("selLaboratorio")).value = '';
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
        
        (<HTMLSelectElement>document.getElementById("selLaboratorio")).value = '';
        this.nombreDia = "";
      },
      err => {
        console.log(err);

        // this.presentToast('Error al guardar');
      }

    );


  }

  laboratorioSelected() {
    var est = (<HTMLSelectElement>document.getElementById("selLaboratorio")).value;
    
    this.idLaboratorio =Number.parseFloat(est);
    console.log("Laboratorio seleccionada");
    console.log(this.idLaboratorio);



  }

  diaSelected() {
    var est = (<HTMLSelectElement>document.getElementById("selDia")).value;
    
    this.nombreDia =est;
    console.log("Dia seleccionado");
    console.log(this.nombreDia);


    //Aqui va lo que me va a traer segun el dia
   
  }


  buscarHorarios() {

    
    
    console.log("Ver como pasa el lab y el dia");
    
    console.log(this.idLaboratorio);
    console.log(this.nombreDia);
    this.HorarioService.getxLabxDia(this.idLaboratorio,this.nombreDia).subscribe(
      res => {
        console.log(res);
        this.LisHorarios = res;
        
       
      },
      err => {
        console.log(err);

        // this.presentToast('Error al guardar');
      }

    );

   
  }




}
