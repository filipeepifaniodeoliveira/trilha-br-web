import { AuthenticationService } from './../../auth/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gerador-rotas',
  templateUrl: './gerador-rotas.component.html',
  styleUrls: ['./gerador-rotas.component.css']
})
export class GeradorRotasComponent implements OnInit {

  usuario: any = {};
  isLogado$: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthenticationService,
  ) { }

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem("user"));
    
    if (this.usuario != {} && this.usuario != undefined && this.usuario != null) {
      this.isLogado$ = true;
    } else {
      this.isLogado$ = false;
    }
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
        // if (this.usuario != {} && this.usuario != undefined && this.usuario != null) {
        //   this.router.navigateByUrl('/home/detalhe');
        // } else {
        //   this.router.navigateByUrl('/auth/login');
        // }
        this.router.navigateByUrl('/home/detalhe');
        break;
      case "detalhe2":
        this.router.navigateByUrl('/home/detalhe2');
        break;
      default:
        break;
    }
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
