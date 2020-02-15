import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrousel-roteiro',
  templateUrl: './carrousel-roteiro.component.html',
  styleUrls: ['./carrousel-roteiro.component.css']
})
export class CarrouselRoteiroComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  segueRota(key) {
    switch (key) {
      case 'casapastel':
        this.router.navigateByUrl('/home/casa-pastel');
        break;
      case 'jardimamor':
        this.router.navigateByUrl('/home/jardim-amor');
        break;
      case 'parqueoliva':
        this.router.navigateByUrl('/home/parque-oliva');
        break;
      case 'pedrassilencio':
        this.router.navigateByUrl('/home/pedra-silencio');
        break;
      case 'parqueoliva':
        this.router.navigateByUrl('/home/tempero-gramado');
        break;
      default:
        break;
    }
  }

  logoutUser() {
    this.router.navigateByUrl('/home/rotas');
  }

}
