import { Component, OnInit, SimpleChanges } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-niv-leer',
  templateUrl: './niv-leer.page.html',
  styleUrls: ['./niv-leer.page.scss'],
})
export class NivLeerPage implements OnInit {

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
      this.respCorrecta(this.idUser,this.id,1,0,this.id_pregunta,1);
      await alert.present();

    } else if (check_two == true && parseInt(value_two) == this.answer){
      this.respCorrecta(this.idUser,this.id,1,0,this.id_pregunta,1);
      await alert.present();

    } else if (check_tree == true && parseInt(value_tree) == this.answer) {
      this.respCorrecta(this.idUser,this.id,1,0,this.id_pregunta,1);
      await alert.present();

    } else if (check_four == true && parseInt(value_four) == this.answer) {
      this.respCorrecta(this.idUser,this.id,1,0,this.id_pregunta,1);
      await alert.present();
    } else {
      this.respCorrecta(this.idUser,this.id,0,1,this.id_pregunta,1);
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
    //console.log("id User" ,this.idUser);
    this.dataservice.getReadLevelList(this.idUser,this.id,(status)=>{
    this.list = status;
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
        if(this.id<5){
          const nl = Number(this.id) +1;
          this.insertCorrecta(this.idUser,nl,0,0,999,1);

        }
        this.reloadCurrentRoute();
      }
    });

  }



  respCorrecta(idU,nivel,acierto,error,idP,modo){

    this.dataservice.respuestaContestada(idU,nivel,acierto,error,idP,modo,(status)=>{
      console.log(status);
      this.ngOnInit();
    });

  }


  insertCorrecta(idU,nivel,acierto,error,idP,modo){

    this.dataservice.respuestaContestada(idU,nivel,acierto,error,idP,modo,(status)=>{
      console.log(status);
      //this.ngOnInit();
    });

  }

  async presentAlert2() {
    const alert2 = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Todas las preguntas de este nivel ya fueron respondidas',
      message: `<img src="../../../assets/imagenes/trofeo.gif" alt="g-maps" width="25%">`,
      buttons: ['OK']
    });

    await alert2.present();
  }

  reloadCurrentRoute() {
    let currentUrl = '/lista-niveles';
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
        console.log(currentUrl);
    });
  }



}
