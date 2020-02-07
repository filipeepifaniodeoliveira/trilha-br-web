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

  constructor(
    private router: Router,
    private authService: AuthenticationService, 
  ) {

  }

  ngOnInit() {
    this.images = [
      {
        id: 1,
        url: 'https://preview.ibb.co/jrsA6R/img12.jpg'
      },
      {
        id: 2,
        url: 'https://preview.ibb.co/kPE1D6/clouds.jpg'
      },
      {
        id: 3,
        url: 'https://preview.ibb.co/mwsA6R/img7.jpg'
      },
      {
        id: 4,
        url: 'https://preview.ibb.co/jrsA6R/img12.jpg'
      },
      {
        id: 5,
        url: 'https://preview.ibb.co/kPE1D6/clouds.jpg'
      },
      {
        id: 6,
        url: 'https://preview.ibb.co/mwsA6R/img7.jpg'
      },
      {
        id: 7,
        url: 'https://preview.ibb.co/kZGsLm/img8.jpg'
      },
      {
        id: 8,
        url: 'https://preview.ibb.co/kZGsLm/img8.jpg'
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
      }, err => {
        // this.showMessage("danger", err.message);
        console.log("danger", err.message);
      });
  }

}
