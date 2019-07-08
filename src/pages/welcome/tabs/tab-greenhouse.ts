import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { ProblemContentPage } from '../../gardens/gardens';


@Component({
  selector: 'tab-greenhouse',
  templateUrl: 'tab-greenhouse.html'

})
export class Greenhouse {
  greenHs: any;
  greenH;
  info = false;
  data;
  one = Greenhouse;
  two = Greenhouse;
  outParam;
  id;
  i = 0;

  constructor(public navCtrl: NavController, params: NavParams, private alertCtrl: AlertController, public modalCtrl: ModalController) {
    this.id = params.data.id;
    this.greenH = params.data.greenHs[this.id - 1];
    this.greenHs = params.data.greenHs;
    console.log('greenh', this.greenH);
    console.log('id', this.id);
    this.outParam = params.get('outParam');
    console.log(this.outParam);
  }
  ngOnInit(): void {

  }
  showInfo() {
    console.log(this.i);
    this.i = this.i + 1;
    console.log(this.i);
    if (this.i % 2 == 1) {
      this.info = true;
      console.log(this.info);
    } else { this.info = false }
  }
  openModal(item) {
    let modal = this.modalCtrl.create(ProblemContentPage, { block: item, greenh: this.greenH });
    modal.present();
  }
}