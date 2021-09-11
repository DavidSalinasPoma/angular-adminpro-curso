// Este modulo va a estar enfocado en las rutas
import { NgModule } from '@angular/core';

// Importar los indispensable
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { NopagesfoundComponent } from './pages/nopagesfound/nopagesfound.component';
import { ProgressComponent } from './pages/progress/progress.component';

// Sub Componente Principal
import { PagesComponent } from './pages/pages.component';

// Configurar las rutas de la APP
const routes: Routes = [

  // Cuando el path sea vacio va redireciones aun sub moduloComonenete
  // Rutas protegidas
  {
    path: '',
    component: PagesComponent,
    // Definiendo rutas hijas de este modulo
    children: [
      { path: 'dashboard', component: DashboardComponent }, // Path inicial
      { path: 'progress', component: ProgressComponent },
      { path: 'grafica1', component: Grafica1Component },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ]
  },



  /****  Rutas Publicas Principales****/
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // Cualquiera otra ruta que no este definida en este routing va a mostrar NoPagesFound
  { path: '**', component: NopagesfoundComponent }
  /**Fin rutas hijas principales */

]


@NgModule({
  declarations: [],
  imports: [
    // Es para implementar rutas PRINCIPALES
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule // Se exporta para que otro modulo pueda disponer de este routing
  ]
})
export class AppRoutingModule { }
