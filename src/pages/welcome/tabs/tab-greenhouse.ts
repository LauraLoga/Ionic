import { Component} from '@angular/core';
import { NavController, NavParams, AlertController, ModalController } from 'ionic-angular';


  @Component({
    selector: 'tab-greenhouse',
    templateUrl: 'tab-greenhouse.html'
  
  })
  export class Greenhouse {
    value;
    greenH;
    info = false;
    data;
    constructor(public navCtrl: NavController, params: NavParams, private alertCtrl: AlertController, public modalCtrl: ModalController) {
      //this.value = params.data.item;
      //this.greenH = params.data.greenHs;
      //this.data = this.greenH[this.value];
      //console.log('params from UserProfilePage', this.greenH); // there is no data
  
    }
    ngOnInit(): void {

    }
    showInfo(){
      this.info=true;
    }
  }