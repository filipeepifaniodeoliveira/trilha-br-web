import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gerador-rotas',
  templateUrl: './gerador-rotas.component.html',
  styleUrls: ['./gerador-rotas.component.css']
})
export class GeradorRotasComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
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

}
