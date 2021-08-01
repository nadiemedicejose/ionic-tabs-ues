import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'servicios',
        loadChildren: () => import('../servicios/servicios.module').then( m => m.ServiciosPageModule)
      },
      {
        path: 'carreras',
        loadChildren: () => import('../carreras/carreras.module').then( m => m.CarrerasPageModule)
      },
      {
        path: 'contacto',
        loadChildren: () => import('../contacto/contacto.module').then( m => m.ContactoPageModule)
      },
      {
        path: 'directorio',
        loadChildren: () => import('../directorio/directorio.module').then( m => m.DirectorioPageModule)
      },
      {
        path: 'conocenos',
        loadChildren: () => import('../conocenos/conocenos.module').then( m => m.ConocenosPageModule)
      },
      {
        path: 'vinculacion',
        loadChildren: () => import('../vinculacion/vinculacion.module').then( m => m.VinculacionPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/conocenos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
