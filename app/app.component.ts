import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

interface Componente{
  name: string;
  icon: string;
  redirecTo: string;
  action?: () => void; 
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  constructor(private router: Router,
              private toastcontroller: ToastController,) {}

  componentes : Componente[]=[
    {
      name:'Escanear QR',
      icon: 'camera-outline',
      redirecTo:'/escanear'
    },
    {
      name:'Generar QR',
      icon: 'qr-code-outline',
      redirecTo:'/generar'
    },
    {
      name:'Informacion',
      icon: 'information-circle-outline',
      redirecTo:'/informacion'
    },
    {
      name:'Feriados',
      icon: 'calendar-number-outline',
      redirecTo:'/feriados'
    },
    {
      name:'Cerrar sesion',
      icon: 'exit-outline',
      redirecTo:'/',
      action: this.logout.bind(this)
    }


  ]

  logout() {
    console.log("Cerrando sesión");
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('role');
    sessionStorage.removeItem('ingresado');

    this.showToast('Cerró Sesion');
    
    this.router.navigateByUrl("/"); 

}

    async showToast(msg: any){
      const toast = await this.toastcontroller.create({ 
        message: msg,
        duration: 3000
      })
      toast.present();
    }

}

