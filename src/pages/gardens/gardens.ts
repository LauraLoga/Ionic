
import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, NavController, ViewController, Item } from 'ionic-angular';
import { GraphicPage } from '../graphics/graphics';
import { TabBasicContentPage } from '../welcome/tabs/tab-basic';
import { Greenhouse } from '../welcome/tabs/tab-greenhouse';


@Component({
  templateUrl: 'gardens.html'
})
export class Gardens implements OnInit {
  devices: Array<{ title: string; description: string }>;
  col;
  name;
  device;
  showMore = false;
  i = 0;
  outParam = [{ "name": "", "value": "" }];
  outParamOptional = [];
  greenHs = [];
  block = {};
  row = {};
  sensor = {};
  plant = {};
  constructor(public navCtrl: NavController, public params: NavParams, private storage: Storage, public modalCtrl: ModalController) {
    this.outParam = [
      { "name": "Temperature", "value": "17 ºC" },
      { "name": "Humidity", "value": "20 %" },
      { "name": "Barometric Pressure", "value": "16 Kpa" },
      { "name": "Ambient Light", "value": "40 Lux" },
    ];
    this.sensor = {
      "idSensor": 0,
      "state": 1,
      "params": {
        "temperature": "",
        "humidity": "",
        "CO2": "",
        "WeterContent": ""
      }
    }
    this.row = {
      "state": 1,
      "idRow": 0,
      "sensors": [this.sensor],
      "plants": [this.plant]
    };
    this.block = {
      "idBlock": 0,
      "state": 1,
      "rows": [this.row],
    };
    this.greenHs = [{
      "id": 1,
      "state": 0,
      "info": {
        "numBlocks": 3,
        "numRows": 75,
        "numRowsBlock": 25,
        "gSize": "600 m²",
        "bSize": "200 m²",
      },
      "insideParam": {
        "temperature": "",
        "humidity": "",
        "CO2": "",
        "Solar Radiation": ""
      },
      "blocks": [this.block]
    },
    {
      "id": 2,
      "state": 1,

      "info": {
        "numBlocks": 2,
        "numRows": 50,
        "numRowsBlock": 25,
        "gSize": "400 m²",
        "bSize": "200 m²",
      },
      "insideParam": {
        "temperature": "",
        "humidity": "",
        "CO2": "",
        "Solar Radiation": ""
      },
      "blocks": [this.block]
    }];

  }
  openModal(item) {
    let modal = this.modalCtrl.create(ProblemContentPage, item);
    modal.present();
  }
  ngOnInit(): void {
    this.name = this.storage.get('name').then((val) => {
      this.name = val;
    });

  }

  showGraphics() {
    this.navCtrl.push(GraphicPage);
  }
  showGreenh(item) {
    this.navCtrl.push(TabBasicContentPage, {item: item, greenHs:this.greenHs, outParam: this.outParam});
  }
  
  /*openNavDetailsPage(item) {
    this.nav.push(WitnessPlantDetailsPage, { item: item });

  }*/
  onChange() {
    this.i = this.i + 1;
    if (this.i % 2 == 1) {
      this.outParamOptional = [
        { "name": "Wind Speed", "value": "North" },
        { "name": "Rain Volume", "value": "5 mm" },
        { "name": "Solar Radiation", "value": "3 W/m²" },
      ];
    }
    else {
      this.outParamOptional = [];
    }
  }
}
@Component({
  templateUrl: 'problems.html'
})
export class ProblemContentPage {
  character;
  greenH;
  problem;
  problems;
  constructor(
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    this.problems = {
      "greenhouse": "no problem",
      "block": "no problem",
      "row": "no problem",
      "sensor": "no problem",
      "param": "no problem",
      "plant": "no problem"
    };

    console.log(this.params.get('item'));
    this.greenH = this.params.get('item');

    this.problems.greenhouse = this.greenH.id
    for (let i = 0; i < this.greenH.blocks.length; i++) {
      if (this.greenH.blocks[i].state == 1) {
        console.log(this.greenH.blocks[i].idBlock)
        this.problems.block = this.greenH.blocks[i].idBlock;
        for (let j = 0; j < this.greenH.blocks[i].rows.length; j++) {
          console.log("green.block.rows.lenght" + this.greenH.blocks[i].rows.length);
          if (this.greenH.blocks[i].rows[j].state == 1) {
            console.log(this.greenH.blocks[i].rows[j]);
            this.problems.row = this.greenH.blocks[i].rows[j].idRow;
            console.log(this.problems.row);
            for (let k = 0; k < this.greenH.blocks[i].rows[j].sensors.length; k++) {
              console.log("green.block.rows.sensors.lenght" + this.greenH.blocks[i].rows[j].sensors.length);
              if (this.greenH.blocks[i].rows[j].sensors[k].state == 1) {
                this.problems.param = this.greenH.blocks[i].rows[j].sensors[k].idSensor;

              }
            }
          }
        }

      }
    }
    //console.log("problems"+this.problems);
    this.problem =
      {
        name: 'Featured section for sensor warnings',
        quote: 'Aims to provide the most detailed and up-to-date information possible on values ​​outside the established range that harm the state of greenhouse crops',
        image: 'assets/imgs/alert.png',
        //image: 'assets/imgs/avatar-gollum.jpg',
        items: [
          { title: 'Greenhouse', note: this.problems["greenhouse"] },
          { title: 'Block', note: this.problems["block"] },
          { title: 'Row', note: this.problems["row"] },
          { title: 'Sensor', note: 'temperature' },
          { title: 'Value', note: '45 ºC' },
          { title: 'Min', note: '15 ºC' },
          { title: 'Max', note: '40 ºC' },
        ]
      };
    // console.log(this.problem.items);
    //this.character = characters[this.params.get('greenhouseId')];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}

