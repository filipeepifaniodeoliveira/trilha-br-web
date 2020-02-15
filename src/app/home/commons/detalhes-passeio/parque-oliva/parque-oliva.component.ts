import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parque-oliva',
  templateUrl: './parque-oliva.component.html',
  styleUrls: ['./parque-oliva.component.css']
})
export class ParqueOlivaComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  
  logoutUser() {
    this.router.navigateByUrl('/home/detalhe');
  }
}
