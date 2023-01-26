import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPopoverPage } from '../../componentes/modal-popover/modal-popover.page';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-pronun',
  templateUrl: './pronun.page.html',
  styleUrls: ['./pronun.page.scss'],
})
export class PronunPage implements OnInit {

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
    this.dataservice.getProgresoByModo(id,3,(status)=>{
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


  async openIonModal(id) {
    const resultado = this.list.find( level => level.id === id );
    const modal = await this.modalController.create({
      component: ModalPopoverPage,
      cssClass: 'my-custom-class',
      componentProps:{
        nombre: resultado.title,
        aciertos: resultado.aciertos,
        fallos: resultado.fallos
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
