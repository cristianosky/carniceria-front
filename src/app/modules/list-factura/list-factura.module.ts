import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ListFacturaRoutingModule } from './list-factura-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { ListFacturaComponent } from './list-factura.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { FormProductoComponent } from './form-producto/form-producto.component';
import { MatSelectModule } from '@angular/material/select';
import { FormInventarioComponent } from './form-inventario/form-inventario.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    ListFacturaComponent,
    FormProductoComponent,
    FormInventarioComponent
  ],
  imports: [
    CommonModule,
    ListFacturaRoutingModule,
    MatTabsModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatCardModule
  ],
  providers: [CurrencyPipe]
})
export class ListFacturaModule { }
