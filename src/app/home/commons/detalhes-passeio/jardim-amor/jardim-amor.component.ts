import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jardim-amor',
  templateUrl: './jardim-amor.component.html',
  styleUrls: ['./jardim-amor.component.css']
})
export class JardimAmorComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  
  logoutUser() {
    this.router.navigateByUrl('/home/detalhe');
  }

}
