import { Component, OnInit } from '@angular/core';
import {format} from 'date-fns';
import {  FormGroup,
  FormControl,
  Validators,
  FormBuilder} from '@angular/forms';
import { ConexionService } from 'src/app/services/conexion.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {
  isSubmitted = false;
  formularioRegistrar: FormGroup;

  constructor(public fb: FormBuilder,
              public conexionService: ConexionService,
              public alertController: AlertController,
              private router: Router) {

   }

  ngOnInit() {
    this.formularioRegistrar = this.fb.group({
      nombreP: new FormControl('',Validators.required),
      nombreH: new FormControl('',Validators.required),
      fechaN:  new FormControl('',Validators.required),
      genero: new FormControl('',Validators.required),
      usuario: new FormControl('',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      password: new FormControl('',Validators.required)
    });
  }
  get errorControl() {
    return this.formularioRegistrar.controls;
  }

  onSubmit() {
    this.isSubmitted = true;
    if (!this.formularioRegistrar.valid) {
      this.presentAlert('Ingrese los datos correctamente');
      return false;
    } else {
      this.conexionService.getUsers(this.formularioRegistrar.value.usuario,(status)=>{
        if (status) {
          this.presentAlert('El usuario ya existe');
        } else {
          this.formularioRegistrar.value.fechaN = format(new Date(this.formularioRegistrar.value.fechaN), 'yyyy-MM-dd');
          this.conexionService.createUser(this.formularioRegistrar.value);
          this.presentAlert('Registro Exitoso');
          this.router.navigate(['/login']);
        }
      });
    }

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

}
