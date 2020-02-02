import { DetalheRotaComponent } from './detalhe-rota/detalhe-rota.component';
import { GeradorRotasComponent } from './gerador-rotas/gerador-rotas.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'rotas', component: GeradorRotasComponent },
  { path: 'detalhe', component: DetalheRotaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }