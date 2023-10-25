import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../pages/servicios/auth.service';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AutorizadoGuard  {
  constructor(private authservice: AuthService,
    private router: Router,
    private toastcontroller: ToastController){
  }

  canActivate():
  //Esta codificacion es para proteger las vistas, esto quiere decir que el usuario si no se registra, no podra acceder a otras pestañas por lo tanto mandara un mensaje "Debe iniciar sesion" 
  |Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.authservice.IsLogged()){
    this.showToast('Debe iniciar sesion');
    this.router.navigateByUrl("/inicio");
      return false;
  }
    return true;
  } 
  async showToast(msg: any){
  const toast = await this.toastcontroller.create({
  message: msg,
  duration: 3000
  })
  toast.present();
  } 




}
