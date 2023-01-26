import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-niveles3',
  templateUrl: './lista-niveles3.page.html',
  styleUrls: ['./lista-niveles3.page.scss'],
})
export class ListaNiveles3Page implements OnInit {

  public list: Array<any>;
  public list2: Array<any>;
  public progress:number;
  public iniciado: Array<any>=[];
  public id_modo:any;

  constructor(public dataservice: DataService,
    public alertController: AlertController,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.id_modo = this.route.snapshot.paramMap.get('id');
    this.id_modo = Number(this.id_modo);
    this.dataservice.obtenerUsuarioLogeado();
    const id = this.dataservice.usuarioLoged.id_usuario;
    this.dataservice.obtenerNiveles((status)=>{
      this.list = status;
      //console.log(this.list);
    });
    this.dataservice.getProgresoByModo(id,3,(status2)=>{
      console.log(status2);
      this.list2 = status2;
      for(let i=0;i<this.list2.length;i++){
        this.iniciado.unshift(this.list2[i].title);
      }
      //console.log(this.iniciado);

    });
  }

  isInit(nivel){
    const resp = this.iniciado.some(x => x=== nivel);
    return resp;
  }


  getProgress(name){
    const resultado = this.list2.find( level => level.title === name );
    const aciertos = Number(resultado.aciertos);
    const fallos = Number(resultado.fallos);
    this.progress = ((aciertos + fallos)/10)*100;
    //console.log(this.progress);
    return this.progress;
  }

  async presentAlertButtons() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Espera',
      message: 'No puedes acceder hasta completar el nivel de arriba',
      buttons: ['Ok']
    });

    await alert.present();
  }

}
