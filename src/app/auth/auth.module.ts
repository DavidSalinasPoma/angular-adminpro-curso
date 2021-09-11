import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes de AUTH
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [ // Se exporta para que otros modulos puedan utilizarlos
    LoginComponent,
    RegisterComponent
  ]
})
export class AuthModule { }
