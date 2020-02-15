import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedra-silencio',
  templateUrl: './pedra-silencio.component.html',
  styleUrls: ['./pedra-silencio.component.css']
})
export class PedraSilencioComponent implements OnInit {
  
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  
  logoutUser() {
    this.router.navigateByUrl('/home/detalhe');
  }

}
