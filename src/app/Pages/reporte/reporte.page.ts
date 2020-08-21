import { ModalController } from '@ionic/angular';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.page.html',
  styleUrls: ['./reporte.page.scss'],
})
export class ReportePage implements OnInit {
  ip = "http://localhost/appLaboratorios/" ;

  @Input() rutaprestamolab: string;
  constructor(private modalController:ModalController) { }

  ngOnInit() {


    var iframe=<HTMLIFrameElement>document.getElementById('FrameReporte');
    console.log(this.ip+this.rutaprestamolab);  
    iframe.src=this.ip+this.rutaprestamolab;
  }


  regresarBTN() {
    this.modalController.dismiss();
  }

}
