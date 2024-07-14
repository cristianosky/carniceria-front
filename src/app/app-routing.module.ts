import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DashboarComponent } from './dashboar/dashboar.component';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule), title: 'Login' },

  { path: '', 
    canActivate: [AuthGuard], 
    component: DashboarComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
      },
      { 
        path: 'facturar', 
        loadChildren: () => import('./modules/facturar/facturar.module').then(m => m.FacturarModule),
        title: 'Facturar'
      },
      {
        path: 'inventario',
        loadChildren: () => import('./modules/inventario/inventario.module').then(m => m.InventarioModule),
        title: 'Inventario'
      },
      {
        path: 'producto',
        loadChildren: () => import('./modules/producto/producto.module').then(m => m.ProductoModule),
        title: 'Producto'
      }
    ]
  },
  
  { path:'**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
