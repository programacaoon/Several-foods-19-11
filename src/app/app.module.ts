import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// import { ComidaChinesaComponent } from './comida-chinesa/comida-chinesa.component';

import { TobBarComponent } from './tob-bar/tob-bar.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './pages/about/about.component';
import { Error404Component } from './pages/error404/error404.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PorcoesComponent } from './porcoes/porcoes.component';
import { LancheComponent } from './lanche/lanche.component';

@NgModule({
  declarations: [
    AppComponent,
    // ComidaChinesaComponent,
   
    TobBarComponent,
   
    HomeComponent,
   
    AboutComponent,
   
    Error404Component,
   
    LoginComponent,
   
    CadastroComponent,
   
    PorcoesComponent,
   
    LancheComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      // { path: '', component: ComidaChinesaComponent },
    ]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
