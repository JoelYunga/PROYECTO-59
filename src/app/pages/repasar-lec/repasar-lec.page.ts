import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-repasar-lec',
  templateUrl: './repasar-lec.page.html',
  styleUrls: ['./repasar-lec.page.scss'],
})
export class RepasarLecPage implements OnInit {

  id:any;
  public list: Array<any>;
  palabra: string;
  img1: string;
  img2:string;
  img3: string;
  img4:string;
  answer:number;
  id_pregunta:number;
  list2:any;
  idUser:any;
  imgresp: string;

  constructor(public alertController: AlertController,
    private route: ActivatedRoute,public dataservice: DataService,
    private router: Router) { }


    async presentAlert() {
      const value_one = (document.getElementById("img_read1") as HTMLInputElement).value;
      const check_one = (document.getElementById("img_read1") as HTMLInputElement).checked;
      const value_two = (document.getElementById("img_read2") as HTMLInputElement).value;
      const check_two = (document.getElementById("img_read2") as HTMLInputElement).checked;
      const value_tree = (document.getElementById("img_read3") as HTMLInputElement).value;
      const check_tree = (document.getElementById("img_read3") as HTMLInputElement).checked;
      const value_four = (document.getElementById("img_read4") as HTMLInputElement).value;
      const check_four = (document.getElementById("img_read4") as HTMLInputElement).checked;

      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header:'FELICITACIONES',
        subHeader:'Respondiste Correcto',
        message: `<img src="../../../assets/imagenes/minions.gif" alt="g-maps" width="25%">`,
        buttons: ['Aceptar']
      });
      const alert2 = await this.alertController.create({
        cssClass: 'my-custom-class',
        header:'¡LO SIENTO! ',
        subHeader:'La respuesta correcta es',
        message: `<img src="${this.imgresp}" alt="g-maps" width="25%">`,
        buttons: ['Aceptar']
      });

      if(check_one == true && parseInt(value_one) == this.answer) {
        this.cambiarLista();
        await alert.present();

      } else if (check_two == true && parseInt(value_two) == this.answer){
        this.cambiarLista();
        await alert.present();

      } else if (check_tree == true && parseInt(value_tree) == this.answer) {
        this.cambiarLista();
        await alert.present();

      } else if (check_four == true && parseInt(value_four) == this.answer) {
        this.cambiarLista();
        await alert.present();
      } else {
        this.cambiarLista();
        await alert2.present();
      }


    }


    // GET INPUT VALUES
  async getValueInput() {
    const value_one = (document.getElementById("img_read1") as HTMLInputElement).value;

    console.log("Value: ",value_one);
  }
  async getValueInput2() {
    const value_two = (document.getElementById("img_read2") as HTMLInputElement).value;
    console.log("Value: ",value_two);
  }
  async getValueInput3() {
    const value_tree = (document.getElementById("img_read3") as HTMLInputElement).value;
    console.log("Value: ",value_tree);
  }
  async getValueInput4() {
    const value_four = (document.getElementById("img_read4") as HTMLInputElement).value;
    console.log("Value: ",value_four);
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.idUser = this.dataservice.usuarioLoged.id_usuario;
    this.dataservice.getAnsweredReadList(this.idUser,this.id,(status)=>{
      this.list = status;
      console.log(this.list);
      if (this.list[0]!=undefined) {
        this.palabra = this.list[0].palabra;
        this.id_pregunta = this.list[0].id_pregunta;
        this.img1 = this.list[0].op1;
        this.img2 = this.list[0].op2;
        this.img3 = this.list[0].op3;
        this.img4 = this.list[0].op4;
        this.answer = Number(this.list[0].answer);
        if(this.answer==1){
          this.imgresp = this.img1;
        }else if(this.answer==2){
          this.imgresp = this.img2;
        }else if(this.answer==3){
          this.imgresp = this.img3;
        }else{
          this.imgresp = this.img4;
        }
        }else{
          this.presentAlert2();
          this.reloadCurrentRoute();
          this.transformar();
        }
      });
  }

  async presentAlert2() {
    const alert2 = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Terminaste con el repaso',
      message: `<img src="../../../assets/imagenes/brain.gif" alt="g-maps" width="25%">`,
      buttons: ['OK']
    });

    await alert2.present();
  }

  reloadCurrentRoute() {
    let currentUrl = '/niv-repasar';
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
        console.log(currentUrl);
    });
  }


  cambiarLista(){
    this.dataservice.updateLeer(this.id_pregunta,(status)=>{
      console.log(status);
      this.ngOnInit();
    });

  }

  transformar(){
    this.dataservice.falseLeer((status)=>{
      console.log(status);
    });

  }

}
