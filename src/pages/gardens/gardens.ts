
import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, NavController, ViewController } from 'ionic-angular';
import { GraphicPage } from '../graphics/graphics';


@Component({
  templateUrl: 'gardens.html' })
export class Gardens implements OnInit {
  devices: Array<{ title: string; description: string }>;
  col;
  name;
  device;
  constructor(public navCtrl: NavController, public params: NavParams, private storage: Storage, public modalCtrl: ModalController) {
    /*this.devices = [
      { title: 'Greenhouse', description: 'The main objective is to visualize in our phones a platform that monitoring and controlling' },
      { title: 'AEMET', description: 'The weather' },
      { title: 'Remote house', description: 'Robotic house' },
     { title: 'Greenhouse 2', description: 'The main objective is to visualize in our phones a platform that monitoring and controlling' }
    ];
    this.device = this.devices[this.params.get('charNum')];
    this.col = this.devices.length;*/
  }
  openModal(characterNum) {

    let modal = this.modalCtrl.create(ProblemContentPage, characterNum);
    modal.present();
  }
  ngOnInit(): void {
    this.name = this.storage.get('name').then((val) => {
      this.name = val;
    });
  }

  showGraphics(){
    this.navCtrl.push(GraphicPage);
  }
}
@Component({
  templateUrl: 'problems.html'
})
export class ProblemContentPage {
  character;

  constructor(
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    var characters = [
      {
        name: 'Featured section for sensor warnings',
        quote: 'Aims to provide the most detailed and up-to-date information possible on values ​​outside the established range that harm the state of greenhouse crops',
        image: 'assets/imgs/alert.png',
        //image: 'assets/imgs/avatar-gollum.jpg',
        items: [
          { title: 'Greenhouse', note: 'idGreenH' },
          { title: 'Block', note: 'idBlock' },
          { title: 'Row', note: 'idBlock.idRow' },
          { title: 'Sensor', note: 'idBlock.idRow.idSensor' },
          { title: 'Value', note: 'idBlock.idRow.idSensor.idValue' },
          { title: 'Min', note: 'idBlock.idRow.idSensor.min' },
          { title: 'Max', note: 'idBlock.idRow.idSensor.max' },
        ]
      },
      {
        name: 'Frodo',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'assets/imgs/avatar-frodo.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Samwise Gamgee',
        quote: 'What we need is a few good taters.',
        image: 'assets/imgs/avatar-samwise.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      }
    ];
    this.character = characters[this.params.get('greenhouseId')];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}

