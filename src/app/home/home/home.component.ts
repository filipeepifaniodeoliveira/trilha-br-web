import { AuthenticationService } from './../../auth/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuario: any = {};
  isLogado$: boolean = false;

  constructor(
    private router: Router,
    private modalService: NgbModal,
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

  setRouter(key) {
    switch (key) {
      case "login":
        this.router.navigateByUrl('/auth/login');
        break;
      case "sobre":
        this.router.navigateByUrl('/home/sobre');
        break;
      case "rotas":
        this.router.navigateByUrl('/home/rotas');
        break;
      default:
        break;
    }
  }


}
