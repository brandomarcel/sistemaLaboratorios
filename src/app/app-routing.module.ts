import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder',
    pathMatch: 'full'
  },
  {
    path: 'folder',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./Pages/usuarios/usuarios.module').then( m => m.UsuariosPageModule)
  },
  {
    path: 'prestamo-lab',
    loadChildren: () => import('./Pages/prestamo-lab/prestamo-lab.module').then( m => m.PrestamoLabPageModule)
  },

  {
    path: 'docentes',
    loadChildren: () => import('./Pages/docentes/docentes.module').then( m => m.DocentesPageModule)
  },
  {
    path: 'usuario-nuevo',
    loadChildren: () => import('./Pages/usuario-nuevo/usuario-nuevo.module').then( m => m.UsuarioNuevoPageModule)
  },
  {
    path: 'estudiante-nuevo',
    loadChildren: () => import('./Pages/estudiante-nuevo/estudiante-nuevo.module').then( m => m.EstudianteNuevoPageModule)
  },
  {
    path: 'docente-nuevo',
    loadChildren: () => import('./Pages/docente-nuevo/docente-nuevo.module').then( m => m.DocenteNuevoPageModule)
  },
  {
    path: 'estudiantes',
    loadChildren: () => import('./Pages/estudiantes/estudiantes.module').then( m => m.EstudiantesPageModule)
  },
  {
    path: 'laboratorios',
    loadChildren: () => import('./Pages/laboratorios/laboratorios.module').then( m => m.LaboratoriosPageModule)
  },
  {
    path: 'laboratorio-nuevo',
    loadChildren: () => import('./Pages/laboratorio-nuevo/laboratorio-nuevo.module').then( m => m.LaboratorioNuevoPageModule)
  },
  {
    path: 'materias',
    loadChildren: () => import('./Pages/materias/materias.module').then( m => m.MateriasPageModule)
  },
  {
    path: 'materia-nuevo',
    loadChildren: () => import('./Pages/materia-nuevo/materia-nuevo.module').then( m => m.MateriaNuevoPageModule)
  },
  {
    path: 'lis-docente',
    loadChildren: () => import('./Pages/lis-docente/lis-docente.module').then( m => m.LisDocentePageModule)
  },
  {
    path: 'lis-estudiante',
    loadChildren: () => import('./Pages/lis-estudiante/lis-estudiante.module').then( m => m.LisEstudiantePageModule)
  },
  {
    path: 'lis-invitado',
    loadChildren: () => import('./Pages/lis-invitado/lis-invitado.module').then( m => m.LisInvitadoPageModule)
  },
  {
    path: 'asignar-horarios',
    loadChildren: () => import('./Pages/asignar-horarios/asignar-horarios.module').then( m => m.AsignarHorariosPageModule)
  },
  {
    path: 'ver-disponibles',
    loadChildren: () => import('./Pages/ver-disponibles/ver-disponibles.module').then( m => m.VerDisponiblesPageModule)
  },
  {
    path: 'verhorarios',
    loadChildren: () => import('./Pages/verhorarios/verhorarios.module').then( m => m.VerhorariosPageModule)
  },
  {
    path: 'invitados',
    loadChildren: () => import('./Pages/invitados/invitados.module').then( m => m.InvitadosPageModule)
  },
  {
    path: 'invitadonuevo',
    loadChildren: () => import('./Pages/invitadonuevo/invitadonuevo.module').then( m => m.InvitadonuevoPageModule)
  },
  {
    path: 'reporte',
    loadChildren: () => import('./Pages/reporte/reporte.module').then( m => m.ReportePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
