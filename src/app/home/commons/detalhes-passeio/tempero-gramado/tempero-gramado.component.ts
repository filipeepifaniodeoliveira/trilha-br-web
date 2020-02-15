import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tempero-gramado',
  templateUrl: './tempero-gramado.component.html',
  styleUrls: ['./tempero-gramado.component.css']
})
export class TemperoGramadoComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  
  logoutUser() {
    this.router.navigateByUrl('/home/detalhe');
  }

}
