import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    console.log('LOGAMOS');
  }

  logout() {
    this.authService.logout();
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


  // openFormModal() {
  //   const modalRef = this.modalService.open(ModalLoginComponent);
    
  //   modalRef.result.then((result) => {
  //     console.log(result);
  //   }).catch((error) => {
  //     console.log(error);
  //   });
  // }

}
