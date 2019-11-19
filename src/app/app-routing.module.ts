import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { Error404Component } from './pages/error404/error404.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PorcoesComponent } from './porcoes/./porcoes.component';
import { LancheComponent } from './lanche/lanche.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about/:id', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'porcoes', component: PorcoesComponent },
  { path: 'lanche', component: LancheComponent },
  {
    path: '**', component: Error404Component
  },


];


@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})

export class AppRoutingModule { }


