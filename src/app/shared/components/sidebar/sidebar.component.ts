import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public user: any = {
    name: '',
    protocolo: ""
  }

  constructor(
  ) { }

  ngOnInit() {
    this.getDataUser();
  }

  logout () {
  }

  getDataUser() {
    // let data = JSON.parse(localStorage.getItem("dataLocal"));
    // this.user.name = data.name;
    // this.user.protocolo = data.id;
  }

}
