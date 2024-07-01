import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DashboarComponent } from './dashboar/dashboar.component';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule), title: 'Login' },

  { path: '', 
    canActivate: [AuthGuard], 
    component: DashboarComponent, title: 'Dashboard',
    children: [
      { 
        path: '', 
        loadChildren: () => import('./modules/facturar/facturar.module').then(m => m.FacturarModule)
      },
      {
        path: 'listar',
        loadChildren: () => import('./modules/list-factura/list-factura.module').then(m => m.ListFacturaModule),
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
