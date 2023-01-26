import { Component, OnInit, SimpleChanges } from '@angular/core';
import { DataService } from '../../services/data.service';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-niveles',
  templateUrl: './lista-niveles.page.html',
  styleUrls: ['./lista-niveles.page.scss'],
})
export class ListaNivelesPage implements OnInit {
  public list: Array<any>;
  public list2: Array<any>;
  public progress:number;
  public iniciado: Array<any>=[];
  public id_modo:any;
  idUser:any
  asd:any;

  constructor(public dataservice: DataService,
    public alertController: AlertController,
    private route: ActivatedRoute) { }

  ngOnInit() {
    //this.refresh();
    this.id_modo = this.route.snapshot.paramMap.get('id');
    this.id_modo = Number(this.id_modo);
    this.dataservice.obtenerUsuarioLogeado();
    const id = this.dataservice.usuarioLoged.id_usuario;
    this.dataservice.obtenerNiveles((status)=>{
      this.list = status;
    });
    this.dataservice.getProgresoByModo(id,1,(status2)=>{
      this.list2 = status2;
      for (let i = 0; i < this.list2.length; i++) {
        this.iniciado.unshift(this.list2[i].title);
      }

    });

  }

  isInit(nivel){
    //console.log(this.iniciado);
    const resp = this.iniciado.some(x =>x=== nivel );
    return resp;
  }
  getProgress(name){
    //console.log(name);
      const resultado = this.list2.find( level => level.title === name );
      const aciertos = Number(resultado.aciertos);
      const fallos = Number(resultado.fallos);
      this.progress = ((aciertos + fallos)/10)*100;
      this.idUser = this.dataservice.usuarioLoged.id_usuario;;
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
