import { ReportePage } from './../Pages/reporte/reporte.page';
import { VerhorariosService } from './../servicios/verhorarios.service';
import { VerhorariosPage } from './../Pages/verhorarios/verhorarios.page';
import  swal  from 'Sweetalert';
import { HorarioService } from './../servicios/horario.service';
import { RegistroService } from './../servicios/registro.service';
import { Registro } from './../models/registro';
import { UsuarioService } from './../servicios/usuario.service';
import { LaboratorioService } from './../servicios/laboratorio.service';
import { LisInvitadoPage } from './../Pages/lis-invitado/lis-invitado.page';
import { MateriaService } from './../servicios/materia.service';
import { EstudianteNuevoPage } from './../Pages/estudiante-nuevo/estudiante-nuevo.page';
import { LisEstudiantePage } from './../Pages/lis-estudiante/lis-estudiante.page';
import { DocenteNuevoPage } from './../Pages/docente-nuevo/docente-nuevo.page';
import { Docente } from './../models/docente';
import { LisDocentePage } from './../Pages/lis-docente/lis-docente.page';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, ToastController, NavController } from '@ionic/angular';
import { Estudiante } from '../models/estudiante';
import { Invitado } from '../models/invitado';






@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  DocenteUso:Docente;
  EstudianteUso:Estudiante;
  InvitadoUso:Invitado;
  LisMaterias:any=[];
  LisDetalleMaterias:any=[];
  idMateria: number = 0;
  idLaboratorio: number = 0;
  LisLaboratorios:any=[];
   LisDetalleLaboratorios:any=[];
   LisUsuarios:any=[];
   LisUltimoregistro:any=[];
   LisDetalleUsuario:any=[];
   idUsuario: number = 0;
   lisMensaje:any=[];
   LisHoras:any=[];
   LisDetalleHoras:any=[];
   idDia: any;
   idReg: any;

   verHorarios:any;



  constructor(private activatedRoute: ActivatedRoute,private modalController: ModalController,
    private materiaService:MateriaService,
    private usuarioService:UsuarioService,
    private toastController:ToastController,
    private registroService:RegistroService,
    private horarioService:HorarioService,
    private navController:NavController,
    private laboratorioService:LaboratorioService,
    private VerhorariosService:VerhorariosService) { }

  ngOnInit() {
    //this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  this.desactivarInviEstu();
    this.cargarUsuario();
    this.cargarLaboratorio();
  

    
  }

  alertaregistroInsertado(){
    this.idReg =this.lisMensaje.registro.id;
    
    swal({
      title: "Registro Guardado!",
      text: "Numero de registro: "+this.idReg+' !',
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
      timer: 3000
    });
    
  }

  alertaverhorarios(){

    swal({
      title: "",
      text: "Revise la disponibilidad Primero",
      icon: "warning",
      buttons: {
        cancel: {
          text: "Cancel",
          value: null,
          visible: true,
          className: "",
          closeModal: true,
        },
        confirm: {
          text: "OK",
          value: true,
          visible: true,
          className: "",
          closeModal: true
        }
      },
      dangerMode: true,
    })
    .then((acepte) => {
      if (acepte) {
       this.verHorario();
      }
    });
  }

 
  desactivarInviEstu(){
    (<HTMLSelectElement>document.getElementById("cardLaboratorio")).style.display = "none";
    (<HTMLSelectElement>document.getElementById("cardHorasInvEstu")).style.display = "none";
    (<HTMLSelectElement>document.getElementById("btnGuardarInviEstu")).style.display = "none";
    (<HTMLSelectElement>document.getElementById("cardDia")).style.display = "block";
    (<HTMLSelectElement>document.getElementById("btnGuardar")).style.display = "block";
    (<HTMLSelectElement>document.getElementById("selMateria")).disabled = false;
    (<HTMLSelectElement>document.getElementById("txtTema")).value = "";
   

  }

  activarInviEstu(){
    (<HTMLSelectElement>document.getElementById("cardLaboratorio")).style.display = "block";
    (<HTMLSelectElement>document.getElementById("cardHorasInvEstu")).style.display = "block";
    (<HTMLSelectElement>document.getElementById("cardDia")).style.display = "none";
    (<HTMLSelectElement>document.getElementById("btnGuardarInviEstu")).style.display = "block";
    (<HTMLSelectElement>document.getElementById("btnGuardar")).style.display = "none";
    (<HTMLSelectElement>document.getElementById("selMateria")).disabled = true;
    (<HTMLSelectElement>document.getElementById("selMateria")).value = '100';

  }

  async verHorario() {
    const modal = await this.modalController.create({
      component: VerhorariosPage

    });
    await modal.present();



   // this.navController.navigateRoot('/verhorarios');
  }


  

  async selDocente() {
    const modal = await this.modalController.create({
      component: LisDocentePage

    });
    await modal.present();

    const { data } = await modal.onDidDismiss();
    //conectado: con, conectado 1 desconectado 0
    //idUsuario:idu
    try {
      if (data.nuevo == 0) {
       // console.log(data.docente);
        this.DocenteUso = data.docente;
        this.cargarDocente();

      } else {
        this.MostrarNuevoDocente();
      }

    } catch (error) {
      console.log('error');
    }

  }

  async MostrarNuevoDocente() {
    const modal = await this.modalController.create({
      component: DocenteNuevoPage,
      componentProps: {
        nuevo: true
      }

    });
    await modal.present();

    const { data } = await modal.onDidDismiss();

    try {

      //console.log(data.docente);
      this.DocenteUso = data.docente;
      this.cargarDocente();


    } catch (error) {
      console.log('error');
    }
  }


  cargarDocente() {
    (<HTMLSelectElement>document.getElementById("txtCedula")).value = this.DocenteUso.id;
    (<HTMLSelectElement>document.getElementById("txtNombre")).value = this.DocenteUso.nombre + ' ' + this.DocenteUso.apellido;
    this.desactivarInviEstu();
   
    console.log("Docente seleccionado");
    console.log(this.DocenteUso.id);
    this.materiaService.getMateriaxDocente(Number.parseInt(this.DocenteUso.id)).subscribe(
      res => {
        console.log(res);
        this.LisMaterias = res;
        
        (<HTMLSelectElement>document.getElementById("selMateria")).value = '';
        this.idMateria = 0;
      },
      err => {
        console.log(err);

        // this.presentToast('Error al guardar');
      }

    );


  }
  materiaSelected() {
    var est = (<HTMLSelectElement>document.getElementById("selMateria")).value;
    
    this.idMateria =Number.parseFloat(est);
    console.log("Materia seleccionada");
    console.log(this.idMateria);

    this.materiaService.getMateriaxMateria((this.idMateria)).subscribe(
      res => {
        console.log(res);

        this.LisDetalleMaterias = res;

      },
      err => {
        console.log(err);

        // this.presentToast('Error al guardar');
      }

    );
  
    this.VerhorariosService.getdevuelvedia(this.idMateria).subscribe(
      res => {
        console.log(res);
        this.LisHoras = res;

        //(<HTMLSelectElement>document.getElementById("selDia")).value = '';
        //this.idDia = 0;
                
      },
      err => {
        console.log(err);

        // this.presentToast('Error al guardar');
      }

    );

    

  }



  diaSelected() {
    var est = (<HTMLSelectElement>document.getElementById("selDia")).value;
    
    this.idDia =(est);
    console.log("Dia Seleccionado");
    console.log(this.idDia);
    
    this.VerhorariosService.getdevuelvedatosfalta( this.idMateria,this.idDia).subscribe(
      res => {
        
        console.log(res);

        this.LisDetalleHoras = res;

        console.log("Id del laboratorio que necesitamos");
        
        if ((<HTMLSelectElement>document.getElementById("selDia")).value != '0') {
          this.idLaboratorio= this.LisDetalleHoras.xdiaxmateriadatos[0].labId;
        }

       
        
        console.log(this.idLaboratorio);
      },
      err => {
        
        console.log(err);

        // this.presentToast('Error al guardar');
      }

    );
    
 

  }


  
  cargarLaboratorio(){

    this.laboratorioService.getLaboratorioDisponibilidad().subscribe(
      res => {
        console.log(res);
        this.LisLaboratorios = res;
        
        (<HTMLSelectElement>document.getElementById("selLaboratorio")).value = '';
        this.idLaboratorio = 0;
      },
      err => {
        console.log(err);

        // this.presentToast('Error al guardar');
      }

    );


  }

  cargarUsuario(){

    this.usuarioService.getUsuario().subscribe(
      res => {
        console.log(res);
        this.LisUsuarios = res;
        
        
        (<HTMLSelectElement>document.getElementById("selLaboratorio")).value = '';
        this.idUsuario = 0;
      },
      err => {
        console.log(err);

        // this.presentToast('Error al guardar');
      }

    );


  }

  cargarUltimoRegistro(){

    this.registroService.getUltimoregistro().subscribe(
      res => {
        console.log(res);
        this.LisUltimoregistro = res;
        
      },
      err => {
        console.log(err);

        // this.presentToast('Error al guardar');
      }

    );


  }


  usuarioSelected() {
    var est = (<HTMLSelectElement>document.getElementById("selUsuario")).value;
    
    this.idUsuario =Number.parseFloat(est);
    console.log("Usuario Seleccionado");
    console.log(this.idUsuario);

    this.usuarioService.getUsuarioxId((this.idUsuario)).subscribe(
      res => {
        
        console.log(res);

        this.LisDetalleUsuario = res;
        
        
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

    this.laboratorioService.getLaboratorioxId((this.idLaboratorio)).subscribe(
      res => {
        console.log(res);

        this.LisDetalleLaboratorios = res;
        
        
      },
      err => {
        console.log(err);

        // this.presentToast('Error al guardar');
      }

    );

  }




async selEstudiante() {
  this.alertaverhorarios();
  
    const modal = await this.modalController.create({
      component: LisEstudiantePage

    });
    await modal.present();

    const { data } = await modal.onDidDismiss();
    
    //conectado: con, conectado 1 desconectado 0
    //idUsuario:idu
    try {
      if (data.nuevo == 0) {
       // console.log(data.docente);
        this.EstudianteUso = data.estudiante;
        this.cargarEstudiante();

      } else {
        this.MostrarNuevoEstudiante();
      }

    } catch (error) {
      console.log('error');
    }

  }

  async MostrarNuevoEstudiante() {
    const modal = await this.modalController.create({
      component: EstudianteNuevoPage,
      componentProps: {
        nuevo: true
      }

    });
    await modal.present();

    const { data } = await modal.onDidDismiss();

    try {

      //console.log(data.docente);
      this.EstudianteUso = data.estudiante;
      this.cargarEstudiante();


    } catch (error) {
      console.log('error');
    }
  }
  cargarEstudiante() {
    (<HTMLSelectElement>document.getElementById("txtCedula")).value = this.EstudianteUso.id;
    (<HTMLSelectElement>document.getElementById("txtNombre")).value = this.EstudianteUso.nombre + ' ' + this.EstudianteUso.apellido;
    this.activarInviEstu();

    console.log(this.EstudianteUso.id);



  }




  async selInvitado() {

    this.alertaverhorarios();
    const modal = await this.modalController.create({
      component: LisInvitadoPage

    });
    await modal.present();

    const { data } = await modal.onDidDismiss();
    //conectado: con, conectado 1 desconectado 0
    //idUsuario:idu
    try {
      if (data.nuevo == 0) {
       // console.log(data.docente);
        this.InvitadoUso = data.invitado;
        this.cargarInvitado();

      } else {
        this.MostrarNuevoEstudiante();
      }

    } catch (error) {
      console.log('error');
    }

  }


  cargarInvitado() {
    (<HTMLSelectElement>document.getElementById("txtCedula")).value = this.InvitadoUso.id;
    (<HTMLSelectElement>document.getElementById("txtNombre")).value = this.InvitadoUso.nombre + ' ' + this.InvitadoUso.apellido;
 
    this.activarInviEstu();
    console.log(this.InvitadoUso.id);



  }

  GuardarNuevo(){
    
    let reg:Registro={
      
      fechaRegistro:(<HTMLSelectElement>document.getElementById("txtFecha")).value,
      horaInicio:this.LisDetalleHoras.xdiaxmateriadatos[0].horaInicio,
      horaFin:this.LisDetalleHoras.xdiaxmateriadatos[0].horaFin,
      Tema:(<HTMLSelectElement>document.getElementById("txtTema")).value,
      idLaboratorista:this.idUsuario,
      idUsuarios:Number.parseInt((<HTMLSelectElement>document.getElementById("txtCedula")).value,),
      idMateria:this.idMateria,
      idLaboratorio:this.idLaboratorio 
        
    };
    
    console.log(reg);
    //console.log("Hasta aqui llega");
    this.registroService.postRegistro(reg).subscribe(
      res => {
        
       
        this.lisMensaje = res;
        if (this.lisMensaje.HttpResponse.statusText == "success") {
          
          this.alertaregistroInsertado();
          //this.presentToast(this.lisMensaje.HttpResponse.message);
      
          this.laboratorioService.putLaboratorioEstado(this.idLaboratorio).subscribe(
            res => {
              console.log(res)
              this.cargarUltimoRegistro();

              this.cargarLaboratorio();
              
              //this.presentToast(this.lisMensaje.HttpResponse.message);
            },
            err =>{ console.log(err);
    
              this.presentToast('Error al guardar');
            }
            
          );


          this.Limpiar();
          
        }else{
          this.presentToast(this.lisMensaje.HttpResponse.message);

        }
        
        //alert(this.lisMensaje.HttpResponse.statusText);
        
      }
      

    );
      
   
    
  }

  GuardarInviEstu(){
    
    let reg:Registro={
      
      fechaRegistro:(<HTMLSelectElement>document.getElementById("txtFecha")).value,
      horaInicio:(<HTMLSelectElement>document.getElementById("txtHorainicioOtro")).value,
      horaFin:(<HTMLSelectElement>document.getElementById("txtHorafinOtro")).value,
      Tema:(<HTMLSelectElement>document.getElementById("txtTema")).value,
      idLaboratorista:this.idUsuario,
      idUsuarios:Number.parseInt((<HTMLSelectElement>document.getElementById("txtCedula")).value,),
      idMateria:this.idMateria,
      idLaboratorio:this.idLaboratorio 
        
    };
    
    console.log(reg);
    //console.log("Hasta aqui llega");
    this.registroService.postRegistro(reg).subscribe(
      res => {
        
       
        this.lisMensaje = res;
        if (this.lisMensaje.HttpResponse.statusText == "success") {
         
          this.alertaregistroInsertado();
    
          // this.presentToast(this.lisMensaje.HttpResponse.message);
      
          this.laboratorioService.putLaboratorioEstado(this.idLaboratorio).subscribe(
            res => {
              console.log(res)
              this.cargarLaboratorio();
              
              //this.presentToast(this.lisMensaje.HttpResponse.message);
            },
            err =>{ console.log(err);
    
              this.presentToast('Error al guardar');
            }
            
          );


          this.Limpiar();
          
        }else{
          this.presentToast(this.lisMensaje.HttpResponse.message);

        }
        
        //alert(this.lisMensaje.HttpResponse.statusText);
        
      }
      

    );
      
   
    
  }



  Limpiar(){
    this.desactivarInviEstu();
    this.cargarUsuario();
    this.cargarLaboratorio();
    (<HTMLSelectElement>document.getElementById("selLaboratorio")).value = '';
    (<HTMLSelectElement>document.getElementById("selUsuario")).value = '';

    (<HTMLSelectElement>document.getElementById("txtFecha")).value = '';
    (<HTMLSelectElement>document.getElementById("txtCedula")).value = '';

    (<HTMLSelectElement>document.getElementById("txtNombre")).value = '';

    (<HTMLSelectElement>document.getElementById("selMateria")).value = '';

    (<HTMLSelectElement>document.getElementById("selDia")).value = '0';
    this.idLaboratorio = 0;
    this.idMateria = 0;
    this.idDia = 0;
    /*this.ClienteUso=undefined;
    this.idPlaca=0;
    this.dispensadorUso=undefined;
    this.cantidad=0;
    this.total=0;
    this.listaPlacas=[];
    }*/
     (<HTMLSelectElement>document.getElementById("txtTema")).value = '';
     //(<HTMLSelectElement>document.getElementById("selMaquina")).value = '0';
     //(<HTMLSelectElement>document.getElementById("txtObservacion")).value = '';
    /* (<HTMLSelectElement>document.getElementById("txtNombre")).value = '';
     (<HTMLSelectElement>document.getElementById("txtDireccion")).value ='';
     (<HTMLSelectElement>document.getElementById("txtTelefono")).value = '';
     (<HTMLSelectElement>document.getElementById("selPlaca")).value='';
     (<HTMLSelectElement>document.getElementById("selMaquina")).value='';
     (<HTMLSelectElement>document.getElementById("selDispesador")).value='';
     (<HTMLSelectElement>document.getElementById("txtCantidad")).value='';
     (<HTMLSelectElement>document.getElementById("txtTotal")).value='';
     */
   }




 




  async presentToast(msj: string) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 5000
    });
    toast.present();
  }








}
