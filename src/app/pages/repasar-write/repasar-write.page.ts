import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-repasar-write',
  templateUrl: './repasar-write.page.html',
  styleUrls: ['./repasar-write.page.scss'],
})
export class RepasarWritePage implements OnInit {
  id:any;
  public list: Array<any>;
  img1: string;
  answer:string;
  answer2:string;
  id_pregunta:number;
  id_user:any;

  constructor(public alertController: AlertController,
    private route: ActivatedRoute,public dataservice: DataService,
    private router: Router) { }

    async presentAlert() {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header:`FELICITACIONES`,
        subHeader:'Respondiste Correcto',
        message: `<img src="../../../assets/imagenes/minions.gif" alt="g-maps" width="25%">`,
        buttons: ['Aceptar']
      });
      const alert2 = await this.alertController.create({
        cssClass: 'my-custom-class',
        header:`¡LO SIENTO! `,
        message: `<h4> La respuestas podían ser <b> ${this.answer} </b> o <b>${this.answer2}</b></h4>`,
        buttons: ['Aceptar']
      });

      // GET INPUT VALIE
      const value_write_one = (document.getElementById("value_write") as HTMLInputElement).value;
      console.log("Value: ",value_write_one);

      if (value_write_one.toUpperCase() == this.answer.toUpperCase() || value_write_one.toUpperCase() == this.answer2.toUpperCase()) {
        this.cambiarLista();
        await alert.present();

      } else {
        this.cambiarLista();
        await alert2.present();

      }
       // CLEAR INPUT VALUE
       (document.getElementById("value_write") as HTMLInputElement).value = "";

    }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.id_user = this.dataservice.usuarioLoged.id_usuario;
    this.dataservice.getAnsweredWriteList(this.id_user,this.id,(status)=>{
      console.log(status);
      this.list = status;
      console.log(this.list);
      if (this.list[0]!=undefined) {
        this.id_pregunta = this.list[0].id_pregunta;
        this.img1 = this.list[0].imagen;
        this.answer = this.list[0].answer;
        this.answer2 = this.list[0].answer2;
      } else {
        this.presentAlert2();
        this.reloadCurrentRoute();
        this.transformar();
        //this.router.navigate(['/lista-niveles2']);
      }
    });
  }


  async presentAlert2() {
    const alert2 = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Terminaste con el repaso',
      message: `<img src="../../../assets/imagenes/brain.gif" alt="g-maps" width="25%">`,
      buttons: ['Entendido']
    });

    await alert2.present();
  }

  reloadCurrentRoute() {
    let currentUrl = '/niv-repasar-es';
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
        console.log(currentUrl);
    });
  }

  cambiarLista(){
    this.dataservice.updateWrite(this.id_pregunta,(status)=>{
      console.log(status);
      this.ngOnInit();
    });

  }

  transformar(){
    this.dataservice.falseWrite((status)=>{
      console.log(status);
    });

  }

}
