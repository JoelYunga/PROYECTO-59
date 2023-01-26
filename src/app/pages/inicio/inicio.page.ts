import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { DataService } from '../../services/data.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalHighscorePage } from '../../componentes/modal-highscore/modal-highscore.page';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  usuario: any;
  modelData: any;
  nombre:string;
  public list: Array<any>;
  public list2: Array<any>;
  public list3: Array<any>;
  public userScore: Array<any>;
  public scores: Array<any>;
  public lugares: Array<any> =[];
  public idUser:number;
  puntaje:number;
  totalaciertos:number;
  constructor(private menu: MenuController,private storage: Storage,public dataservice: DataService,
    public alertController: AlertController,private router: Router,public modalController: ModalController) { }

  ngOnInit() {

    this.dataservice.obtenerUsuarioLogeado();
    this.idUser = this.dataservice.usuarioLoged.id_usuario;
    this.dataservice.userScore((status)=>{
      this.scores = status;
    });

    this.dataservice.userScoreById(this.idUser,(status)=>{
      this.userScore = status;
      if(this.userScore.length>0){
        const aciertos = this.userScore[0].taciertos;
        this.puntaje = aciertos*5;
      }else{
        this.puntaje = 0;
      }

    });



  }
  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  async getData(key) {
    const keyVal = await this.storage.get(key);
    return keyVal;
  }

  async presentAlert2() {
    const alert2 = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: `${this.dataservice.usuarioLoged.usuario}`,
      subHeader:`Representante: ${this.dataservice.usuarioLoged.nombre_padre}`,
      message: `<h4> Nombre:  ${this.dataservice.usuarioLoged.nombre_hijo} </h4> `,
      buttons: ['OK']
    });

    await alert2.present();


  }

  async presentAlert3() {
    const alert2 = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: `Tienes ${this.puntaje} puntos`,
      message: `
      <ul>
      <li><h4> Ganas 5 puntos por cada pregunta contestada correctamente </h4></li>
      </ul>
       `,
      buttons: ['Entendido']
    });

    await alert2.present();

  }


  async openIonModal() {

    const modal = await this.modalController.create({
      component: ModalHighscorePage,
      cssClass: 'my-custom-class',
      componentProps:{
        lista: this.scores,
        idUser: this.idUser
      }
    });
    modal.onDidDismiss().then((modelData)=>{
      if (modelData !== null) {

        this.modelData = modelData.data;
      }
    });
    return await modal.present();

  }



}
