import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';

var components = [ LoginComponent, RegisterComponent ];

@NgModule({
  declarations: [ components ],
  imports: [ CommonModule, RouterModule ],
  exports: [ components ]
})

export class AuthModule { }
