import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-niv-repasar',
  templateUrl: './niv-repasar.page.html',
  styleUrls: ['./niv-repasar.page.scss'],
})
export class NivRepasarPage implements OnInit {

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
    this.dataservice.getProgresoByModo(id,1,(status)=>{
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
