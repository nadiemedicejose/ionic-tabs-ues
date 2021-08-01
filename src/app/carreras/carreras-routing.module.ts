import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarrerasPage } from './carreras.page';

const routes: Routes = [
  {
    path: '',
    component: CarrerasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarrerasPageRoutingModule {}
