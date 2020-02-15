import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-casa-pastel',
  templateUrl: './casa-pastel.component.html',
  styleUrls: ['./casa-pastel.component.css']
})
export class CasaPastelComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  
  logoutUser() {
    this.router.navigateByUrl('/home/detalhe');
  }

}
