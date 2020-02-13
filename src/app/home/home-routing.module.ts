import { DetalheRotaComponent } from './detalhe-rota/detalhe-rota.component';
import { GeradorRotasComponent } from './gerador-rotas/gerador-rotas.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetalheRota2Component } from './detalhe-rota2/detalhe-rota2.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'rotas', component: GeradorRotasComponent },
  { path: 'detalhe', component: DetalheRotaComponent },
  { path: 'detalhe2', component: DetalheRota2Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }