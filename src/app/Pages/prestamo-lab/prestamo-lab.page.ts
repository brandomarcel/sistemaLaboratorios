import { ReportePage } from './../reporte/reporte.page';
import swal  from 'Sweetalert';
import { Detalleregistro } from './../../models/detalleregistro';
import { ToastController, ModalController } from '@ionic/angular';
import { RegistroService } from './../../servicios/registro.service';
import { LaboratorioService } from './../../servicios/laboratorio.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-prestamo-lab',
  templateUrl: './prestamo-lab.page.html',
  styleUrls: ['./prestamo-lab.page.scss'],
})
export class PrestamoLabPage implements OnInit {
  idLaboratorio: number = 0;
  idRegistro: number = 0;
  LisLaboratorios:any=[];
  LisRegistroDetalle:any=[];
  lisMensaje:any=[];
  apeDoc:string="";
  nomDoc:string="";

  materia:string="";
  LisRegistros:any=[];
  lisMaquinas:any=[];
  maquina:any;
  idreg:any;


  constructor(private laboratorioService:LaboratorioService,
    private registroService:RegistroService,
    private toastController:ToastController,
    private modalController:ModalController) { }

  ngOnInit() {
    this.cargarLaboratorio();
    this.cargarRegistros();

    (<HTMLSelectElement>document.getElementById("btnGuardar")).disabled = true;
  }


  cargarLaboratorio(){

    this.laboratorioService.getLaboratorio().subscribe(
      res => {
        console.log(res);
        this.LisLaboratorios = res;
        
        
      },
      err => {
        console.log(err);

        // this.presentToast('Error al guardar');
      }

    );


  }

  cargarRegistros(){

    this.registroService.getRegistro().subscribe(
      res => {
        console.log(res);
        this.LisRegistros = res;
        
        
      },
      err => {
        console.log(err);

        // this.presentToast('Error al guardar');
      }

    );


  }



  registroSelected() {
    


      var est = (<HTMLSelectElement>document.getElementById("selRegistro")).value;
    
      this.idLaboratorio =Number.parseFloat(est);

      this.idreg=est;
      console.log("Registro seleccionada de REg"+this.idreg);


      console.log("Registro seleccionada");
      console.log(this.idLaboratorio);
  
      this.registroService.getRegistroxId((this.idLaboratorio)).subscribe(
        res => {
          console.log(res);
  
          this.LisRegistroDetalle = res;
  if ((<HTMLSelectElement>document.getElementById("selRegistro")).value != '0') {
    this.nomDoc=this.LisRegistroDetalle.registro[0].idLaboratorio;//para idlaboratorio
    this.apeDoc=this.LisRegistroDetalle.registro[0].idUsuarios;//para idUsuarios
    console.log("nomDoc");

    console.log(this.nomDoc);
    this.cargarMaquinas();
  }
  
          //this.apeDoc=this.LisRegistroDetalle.registro[0].apellidoUsuarios;
        //  this.materia=this.LisRegistroDetalle.registro[0].nombreMateria;//para el idlaboratorio
          
          
        },
        err => {
          console.log(err);
  
          // this.presentToast('Error al guardar');
        }
  
      );
    
    
    
   

  }

  cargarMaquinas(){

    this.registroService.getDetalleregistro(Number.parseInt(this.nomDoc)).subscribe(
      res => {
        console.log(res);
        this.lisMaquinas = res;
        
        (<HTMLSelectElement>document.getElementById("btnGuardar")).disabled = false;
      },
      err => {
        console.log(err);

        // this.presentToast('Error al guardar');
      }

    );


  }

  maquinaSelected() {
    var est = (<HTMLSelectElement>document.getElementById("selMaquina")).value;
    
    this.maquina =(est);
    console.log("Maquina seleccionada");
    console.log(this.maquina);
   

  }



  GuardarNuevo(){
    
    let regDet:Detalleregistro={
      
      idRegistro:this.idLaboratorio,
      nombrePc:this.maquina,
      idEstudiante:(<HTMLSelectElement>document.getElementById("txtOcupante")).value,
      observacion:(<HTMLSelectElement>document.getElementById("txtObservacion")).value
      
        
    };
    
    console.log(regDet);
    //console.log("Hasta aqui llega");
    this.registroService.postDetalleregistro(regDet).subscribe(
      res => {
        
       
        this.lisMensaje = res;
        if (this.lisMensaje.HttpResponse.statusText == "success") {
          
          this.alertaregistroInsertado();
          (<HTMLSelectElement>document.getElementById("selMaquina")).value = '';
          (<HTMLSelectElement>document.getElementById("txtObservacion")).value = '';
          (<HTMLSelectElement>document.getElementById("txtOcupante")).value = '';
          
          
        }else{
          this.presentToast(this.lisMensaje.HttpResponse.message);

        }
        
        //alert(this.lisMensaje.HttpResponse.statusText);
        
      }
      

    );
      
    
    
  }


  actualizarEstadoregistro(){
    console.log( "Captura del idreg como va");
    console.log(this.idLaboratorio)
      this.registroService.putEstadoregistro(this.idLaboratorio).subscribe(
        res => {
          
          console.log(res)
          this.lisMensaje = res;
          if (this.lisMensaje.HttpResponse.statusText == "OK") {
          //  this.presentToast(this.lisMensaje.HttpResponse.message);
          this.cargarRegistros();  
          this.actualizarEstadoLaboratorio();

            
          //this.Limpiar();
           
            
            
          }else{
            this.presentToast(this.lisMensaje.HttpResponse.message);
  
          }
          
          //alert(this.lisMensaje.HttpResponse.statusText);
          
        }
        
        
      
  
      );
      
      
  }

  actualizarEstadoLaboratorio(){
    console.log( "Captura del id como va");
    console.log(this.nomDoc)
      this.laboratorioService.putLaboratorioEstado(Number.parseInt(this.nomDoc)).subscribe(
        res => {
          console.log( "Captura error Update Estado");
          console.log(res)
          this.lisMensaje = res;
          if (this.lisMensaje.HttpResponse.statusText == "OK") {
            //this.presentToast(this.lisMensaje.HttpResponse.message);
            
  
  this.alertaLaboratorioDevuelto();

  this.MostrarReporte();

  this.cargarRegistros();
  
  
  (<HTMLSelectElement>document.getElementById("btnGuardar")).disabled = true;
          }else{
            this.presentToast(this.lisMensaje.HttpResponse.message);
  
          }
          
          //alert(this.lisMensaje.HttpResponse.statusText);
          
        }
        
       
  
      );

  }


  alertaregistroInsertado(){

    swal({
      title: "Registro Guardado!",
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

  alertaLaboratorioDevuelto(){

    swal({
      title: "Laboratorio Entregado!",
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
      timer: 2000
      
    });

    //this.Limpiar();

  }

  Limpiar(){
   /* this.ClienteUso=undefined;
    this.idPlaca=0;
    this.dispensadorUso=undefined;
    this.cantidad=0;
    this.total=0;
    this.listaPlacas=[];
    *///this.cargarCliente();
   (<HTMLSelectElement>document.getElementById("selRegistro")).value = '0';
    (<HTMLSelectElement>document.getElementById("selMaquina")).value = '0';
    (<HTMLSelectElement>document.getElementById("txtObservacion")).value = '';
    (<HTMLSelectElement>document.getElementById("txtOcupante")).value = '';

   // (<HTMLSelectElement>document.getElementById("txtNombresApell")).value = '';
//    (<HTMLSelectElement>document.getElementById("txtnomlabreg")).value = '';


   /* (<HTMLSelectElement>document.getElementById("txtNombre")).value = '';
    (<HTMLSelectElement>document.getElementById("txtnomlabreg")).value ='';
    (<HTMLSelectElement>document.getElementById("txtTelefono")).value = '';
    (<HTMLSelectElement>document.getElementById("selPlaca")).value='';
    (<HTMLSelectElement>document.getElementById("selMaquina")).value='';
    (<HTMLSelectElement>document.getElementById("selDispesador")).value='';
    (<HTMLSelectElement>document.getElementById("txtCantidad")).value='';
    (<HTMLSelectElement>document.getElementById("txtTotal")).value='';
    */
  }


  async MostrarReporte(){

   
  
    console.log("Este es el id reg"+this.idreg);

    const modal = await this.modalController.create({
      component: ReportePage,
      componentProps: {
        rutaprestamolab: 'Reportes/ReporteDevolver.php?reg='+this.idreg

        
      }
  
    });
    await modal.present();

  this.Limpiar();
    
  }




  async presentToast(msj: string) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 5000
    });
    toast.present();
  }

}
