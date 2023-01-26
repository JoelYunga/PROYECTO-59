import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class NoingresadoGuard implements CanActivate {
  constructor(private storage: Storage,private navCrtl: NavController){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (localStorage.getItem('ingresado')) {
        this.navCrtl.navigateRoot('inicio');
        return false;
      }else{
        return true;
      }
    }

}
