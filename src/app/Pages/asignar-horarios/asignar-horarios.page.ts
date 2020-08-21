import { ModalController } from '@ionic/angular';
import { ReportePage } from './../reporte/reporte.page';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asignar-horarios',
  templateUrl: './asignar-horarios.page.html',
  styleUrls: ['./asignar-horarios.page.scss'],
})
export class AsignarHorariosPage implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }



  async MostrarReporte(Nombre:string){
    const modal = await this.modalController.create({
      component: ReportePage,
      componentProps: {
        rutaprestamolab: 'Reportes/'+Nombre
      }
  
    });
    await modal.present();
  
    
  }


}
