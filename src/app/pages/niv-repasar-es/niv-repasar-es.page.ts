import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-niv-repasar-es',
  templateUrl: './niv-repasar-es.page.html',
  styleUrls: ['./niv-repasar-es.page.scss'],
})
export class NivRepasarEsPage implements OnInit {

  modelData: any;
  public list: Array<any>;
  public long: Number;
  public progress: number;
  constructor(
              public modalController: ModalController,
              public dataservice: DataService) { }
  ngOnInit() {
    this.dataservice.obtenerUsuarioLogeado();
    const id = this.dataservice.usuarioLoged.id_usuario;
    this.dataservice.getProgresoByModo(id,2,(status)=>{
      console.log(status);
      this.list = status;
      this.long = this.list.length;
      //this.progress = this.list.
    });

  }

  getProgress(id){
    const resultado = this.list.find( level => level.id === id );
    const aciertos = Number(resultado.aciertos);
    const fallos = Number(resultado.fallos);
    this.progress = ((aciertos + fallos)/10)*100;
    //console.log(this.progress);
    return this.progress;

  }

}
