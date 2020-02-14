import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-roteiro',
  templateUrl: './lista-roteiro.component.html',
  styleUrls: ['./lista-roteiro.component.css']
})
export class ListaRoteiroComponent implements OnInit {

  constructor() { }

  line1 = false;
  line2 = false;
  line3 = false;

  ngOnInit() {
  }

  clickOnLine(value) {

    switch (value) {
      case 1:
        if (this.line1 == false) {
          this.line1 = true;
          this.line2 = false;
          this.line3 = false;
        } else {
          this.line1 = false;
        }
        break;
      case 2:
        if (this.line2 == false) {
          this.line2 = true;
          this.line1 = false;
          this.line3 = false;
        } else {
          this.line2 = false;
        }
        break;
      case 3:
        if (this.line3 == false) {
          this.line3 = true;
          this.line2 = false;
          this.line1 = false;
        } else {
          this.line3 = false;
        }
        break;

      default:
        break;
    }
  }

}
