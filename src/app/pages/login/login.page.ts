import { Component, OnInit } from '@angular/core';
import {  FormGroup,
    FormControl,
    Validators,
    FormBuilder} from '@angular/forms';
import { ConexionService } from 'src/app/services/conexion.service';
import { AlertController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  isSubmitted = false;
  formularioLogin: FormGroup;

  constructor(
    public fb: FormBuilder,
    public conexionService: ConexionService,
    public alertController: AlertController,
    private navCtrl: NavController,
    private storage: Storage,
    private router: Router
    ) {
    this.formularioLogin = this.fb.group({
      usuario: new FormControl('',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      password: new FormControl('',Validators.required)
    });
   }

   get errorControl() {
    return this.formularioLogin.controls;
  }

  async ngOnInit() {

    await this.storage.create();
  }


  onSubmit() {
    this.isSubmitted = true;
    this.conexionService.logearse(this.formularioLogin.value,(status)=>{
      if (status) {
          localStorage.setItem('ingresado','true');
          localStorage.setItem('logeado',JSON.stringify(status));
          this.router.navigate(['/inicio']);
      } else {
        this.presentAlert('Usuario o Contraseña incorrectos');
      }
    });

  }
  async presentAlert(msg) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Aviso',
      subHeader: msg,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async setData(key, value) {
    const res = await this.storage.set(key, value);
    console.log(res);
  }

  async getData(key) {
    const keyVal = await this.storage.get(key);
    console.log('Key is', keyVal);
  }

}
