import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { ProductosService } from 'src/app/services/productos/productos.service';

@Component({
  selector: 'app-facturar',
  templateUrl: './facturar.component.html',
  styleUrls: ['./facturar.component.scss']
})
export class FacturarComponent implements OnInit {
  productos: any = [];
  busqueda: FormControl = new FormControl('', [Validators.maxLength(50)]);
  constructor(private _ProductService: ProductosService) {
    this.busqueda.valueChanges.pipe(debounceTime(1000)).subscribe(value => {
      this.getInventario(value);
    });
  }

  ngOnInit(): void {
    this.getInventario();
  }

  getInventario(q?:string) {
    this._ProductService.getInventario(q).subscribe((res: any) => {
      this.productos = res;
    }, (err) => {
      console.error(err)
    });
  }

}
