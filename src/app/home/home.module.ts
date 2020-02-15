import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { AuthenticationService  } from '../auth/services/auth.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GeradorRotasComponent } from './gerador-rotas/gerador-rotas.component';
import { DetalheRotaComponent } from './detalhe-rota/detalhe-rota.component';
import { ListaRoteiroComponent } from './commons/lista-roteiro/lista-roteiro.component';
import { ImageLightboxComponent } from './commons/image-lightbox/image-lightbox.component';
import { CarrouselRoteiroComponent } from './commons/carrousel-roteiro/carrousel-roteiro.component';
import { MapsComponent } from './commons/maps/maps.component';
import { AgmCoreModule } from '@agm/core';
import { DetalheRota2Component } from './detalhe-rota2/detalhe-rota2.component';
import { CarrouselRoteiro1Dia2Component } from './commons/carrossels/carrousel-roteiro1-dia2/carrousel-roteiro1-dia2.component';
import { CarrouselRoteiro1Dia3Component } from './commons/carrossels/carrousel-roteiro1-dia3/carrousel-roteiro1-dia3.component';
import { CarrouselRoteiro2Dia1Component } from './commons/carrossels/carrousel-roteiro2-dia1/carrousel-roteiro2-dia1.component';
import { CarrouselRoteiro2Dia2Component } from './commons/carrossels/carrousel-roteiro2-dia2/carrousel-roteiro2-dia2.component';
import { CarrouselRoteiro2Dia3Component } from './commons/carrossels/carrousel-roteiro2-dia3/carrousel-roteiro2-dia3.component';
import { ListaRoteiro2Component } from './commons/lista-roteiro2/lista-roteiro2.component';
import { CasaPastelComponent } from './commons/detalhes-passeio/casa-pastel/casa-pastel.component';
import { JardimAmorComponent } from './commons/detalhes-passeio/jardim-amor/jardim-amor.component';
import { PedraSilencioComponent } from './commons/detalhes-passeio/pedra-silencio/pedra-silencio.component';
import { TemperoGramadoComponent } from './commons/detalhes-passeio/tempero-gramado/tempero-gramado.component';
import { ParqueOlivaComponent } from './commons/detalhes-passeio/parque-oliva/parque-oliva.component';


@NgModule({
  declarations: [ 
    HomeComponent, GeradorRotasComponent, DetalheRotaComponent, ImageLightboxComponent, ListaRoteiroComponent, CarrouselRoteiroComponent, MapsComponent, DetalheRota2Component, CarrouselRoteiro1Dia2Component, CarrouselRoteiro1Dia3Component, CarrouselRoteiro2Dia1Component, CarrouselRoteiro2Dia2Component, CarrouselRoteiro2Dia3Component, ListaRoteiro2Component, CasaPastelComponent, JardimAmorComponent, PedraSilencioComponent, TemperoGramadoComponent, ParqueOlivaComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    HomeRoutingModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    // AgmCoreModule
  ],
  providers: [
    AuthenticationService
  ]
})
export class HomeModule { }
