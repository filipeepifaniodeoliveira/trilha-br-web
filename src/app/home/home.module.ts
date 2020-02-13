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


@NgModule({
  declarations: [ 
    HomeComponent, GeradorRotasComponent, DetalheRotaComponent, ImageLightboxComponent, ListaRoteiroComponent, CarrouselRoteiroComponent, MapsComponent, DetalheRota2Component,
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
