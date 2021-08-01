import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VinculacionPageRoutingModule } from './vinculacion-routing.module';

import { VinculacionPage } from './vinculacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VinculacionPageRoutingModule
  ],
  declarations: [VinculacionPage]
})
export class VinculacionPageModule {}
