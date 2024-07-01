import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacturarRoutingModule } from './facturar-routing.module';
import { FacturarComponent } from './facturar.component';


@NgModule({
  declarations: [
    FacturarComponent
  ],
  imports: [
    CommonModule,
    FacturarRoutingModule
  ]
})
export class FacturarModule { }
