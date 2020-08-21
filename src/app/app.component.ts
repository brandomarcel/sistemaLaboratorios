import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    /**{
      title: 'Principal',
      url: '/folder/Principal',
      icon: 'desktop'
    },
    {
      title: 'Usuarios',
      url: '/folder/Usuarios',
      icon: 'people'
    },
    {
      title: 'Favorites',
      url: '/sistemalaboratorios/Favorites',
      icon: 'heart'
    },
    {
      title: 'Archived',
      url: '/sistemalaboratorios/Archived',
      icon: 'archive'
    },
    {
      title: 'Trash',
      url: '/sistemalaboratorios/Trash',
      icon: 'trash'
    },
    {
      title: 'Spam',
      url: '/sistemalaboratorios/Spam',
      icon: 'warning'
    }*/
  ];
  public labels = ['Brando Cevallos', 'Jonathan Tisalema', 'Giovanni Rivera', 'Jessica Moreta'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    /**const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }*/
this.mostartMenu();

  }

  mostartMenu(){
    this.appPages = [
      {
        title: 'Solicitud ',
        url: '/folder',
        icon: 'home'
      },
    
      {
        title: 'Entrega',
        url: '/prestamo-lab',
        icon: 'paper-plane'
      },

      {
        title: 'Ver Horarios',
        url: '/verhorarios',
        icon: 'time'
      },


      {
        title: 'Laboratoristas',
        url: '/usuarios',
        icon: 'people'
      },
      {
        title: 'Estudiantes',
        url: '/estudiantes',
        icon: 'people'
      },
      {
        title: 'Invitados',
        url: '/invitados',
        icon: 'people'
      },
      
      {
        title: 'Reportes',
        url: '/asignar-horarios',
        icon: 'archive'
      },
     /* {
        title: 'Docentes',
        url: '/docentes',
        icon: 'people'
      },
      {
        title: 'Laboratorios',
        url: '/laboratorios',
        icon: 'warning'
      },
     
      {
        title: 'Materias',
        url: '/materias',
        icon: 'book'
      },
       */
    ];
  }
}
