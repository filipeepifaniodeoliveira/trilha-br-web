import { TemperoGramadoComponent } from './commons/detalhes-passeio/tempero-gramado/tempero-gramado.component';
import { PedraSilencioComponent } from './commons/detalhes-passeio/pedra-silencio/pedra-silencio.component';
import { ParqueOlivaComponent } from './commons/detalhes-passeio/parque-oliva/parque-oliva.component';
import { JardimAmorComponent } from './commons/detalhes-passeio/jardim-amor/jardim-amor.component';
import { CasaPastelComponent } from './commons/detalhes-passeio/casa-pastel/casa-pastel.component';
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

  { path: 'casa-pastel', component: CasaPastelComponent },
  { path: 'jardim-amor', component: JardimAmorComponent },
  { path: 'parque-oliva', component: ParqueOlivaComponent },
  { path: 'pedra-silencio', component: PedraSilencioComponent },
  { path: 'tempero-gramado', component: TemperoGramadoComponent },
  { path: 'detalhe2', component: DetalheRota2Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }