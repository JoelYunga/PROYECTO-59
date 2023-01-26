import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salir',
  templateUrl: './salir.page.html',
  styleUrls: ['./salir.page.scss'],
})
export class SalirPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    localStorage.removeItem('ingresado');
    localStorage.removeItem('logeado');
    this.router.navigate(['/login']);
  }

}
