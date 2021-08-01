import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VinculacionPage } from './vinculacion.page';

const routes: Routes = [
  {
    path: '',
    component: VinculacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VinculacionPageRoutingModule {}
