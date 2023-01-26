import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-highscore',
  templateUrl: './modal-highscore.page.html',
  styleUrls: ['./modal-highscore.page.scss'],
})
export class ModalHighscorePage implements OnInit {

  @Input() lista:Array<any>;
  @Input() idUser:number;
  lugares:Array<any> = [];

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    for(let i=0;i<this.lista.length;i++){
      this.lugares.push(this.lista[i].id_usuario);
    }
    console.log(this.idUser);
  }
  posLista(id){
    const lugar = this.lugares.indexOf(id);
    return lugar+1;
  }

  async closeModel() {

    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
    const close: string = 'Modal Removed';
    await this.modalController.dismiss(close);
  }

}
