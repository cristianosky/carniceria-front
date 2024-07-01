import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListFacturaComponent } from './list-factura.component';

const routes: Routes = [
  { path: '', component: ListFacturaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListFacturaRoutingModule { }
