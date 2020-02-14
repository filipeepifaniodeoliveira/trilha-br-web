import { AuthenticationService } from './../../auth/services/auth.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-detalhe-rota',
  templateUrl: './detalhe-rota.component.html',
  styleUrls: ['./detalhe-rota.component.css']
})
export class DetalheRotaComponent implements OnInit {

  galleryId = 'myLightbox';
  images: any = [];
  isLogado$: boolean = true;

  constructor(
    private router: Router,
    private authService: AuthenticationService, 
  ) {

  }

  ngOnInit() {
    this.images = [
      {
        id: 1,
        url: '../../../assets/img/img-cards/parque-pedras-silencio.jpg'
      },
      {
        id: 2,
        url: '../../../assets/img/img-cards/tempero-gramado.jpg'
      },
      {
        id: 3,
        url: '../../../assets/img/img-cards/parque-olivas.jpg'
      },
      {
        id: 4,
        url: '../../../assets/img/img-cards/musel-automovel.jpg'
      },
      {
        id: 5,
        url: '../../../assets/img/img-cards/cantina-linha-bela.jpg'
      },
      {
        id: 6,
        url: '../../../assets/img/img-cards/prawer.jpg'
      },
      {
        id: 7,
        url: '../../../assets/img/img-cards/musel-automovel.jpg'
      },
      {
        id: 8,
        url: '../../../assets/img/img-cards/colono.jpg'
      }
    ];
  }

  setRouter(key) {
    switch (key) {
      case "login":
        this.router.navigateByUrl('/auth/login');
        break;
      case "sobre":
        this.router.navigateByUrl('/home/sobre');
        break;
      case "home":
        this.router.navigateByUrl('/home/home');
        break;
      case "detalhe":
        this.router.navigateByUrl('/home/detalhe');
        break;
      default:
        break;
    }
  }

  clickImg() {
  }

  // SignOut Firebase Session and Clean LocalStorage
  logoutUser() {
    this.authService.logout()
      .then(res => {
        console.log(res);
        localStorage.removeItem('user');
        this.isLogado$ = false;
        this.router.navigateByUrl('/home/home');
      }, err => {
        // this.showMessage("danger", err.message);
        console.log("danger", err.message);
      });
  }

}
