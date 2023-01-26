import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-jugar',
  templateUrl: './menu-jugar.page.html',
  styleUrls: ['./menu-jugar.page.scss'],
})
export class MenuJugarPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  reloadCurrentRoute() {
    let currentUrl = '/inicio';
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
        console.log(currentUrl);
    });
  }

}
