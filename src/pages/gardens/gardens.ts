
import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, NavController, ViewController } from 'ionic-angular';
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
      "idRow": 1,
      "sensors": [this.sensor],
      "plants": [this.plant]
    };
    this.greenHs = [{
      "id": 1,
      "state": 0,
      "info": [
        { "name": "Number of blocks", "value": 3 },
        { "name": "Number of rows", "value": 75 },
        { "name": "Number of rows per block", "value": 25 },
        { "name": "Size of greenhouse", "value": "600 m²" },
        { "name": "Size of block", "value": "200 m²" },
      ],
      "insideParam": [
        { "name": "temperature", "value": "20 ºC" },
        { "name": "humidity", "value": "40 %" },
        { "name": "CO2", "value": "20 Kpa" },
        { "name": "Solar Radiation", "value": "50 Lux" }
      ],
      "blocks": [{
        "idBlock": 1,
        "state": 0,
        "rows": [this.row],
      }, {
        "idBlock": 2,
        "state": 0,
        "rows": [this.row],
      }, {
        "idBlock": 3,
        "state": 0,
        "rows": [this.row],
      }]
    },
    {
      "id": 2,
      "state": 1,

      "info": [
        { "name": "Number of blocks", "value": 2 },
        { "name": "Number of rows", "value": 50 },
        { "name": "Number of rows per block", "value": 25 },
        { "name": "Size of greenhouse", "value": "400 m²" },
        { "name": "Size of block", "value": "200 m²" },
      ],
      "insideParam": [
        { "name": "Temperature", "value": "25 ºC" },
        { "name": "Humidity", "value": "42 %" },
        { "name": "CO2", "value": "21 Kpa" },
        { "name": "Solar Radiation", "value": "60 Lux" }
      ],
      "blocks": [{
        "idBlock": 1,
        "state": 1,
        "rows": [this.row],
      },
      {
        "idBlock": 2,
        "state": 0,
        "rows": [this.row],
      }]
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
  showGreenh(item) {
    this.navCtrl.push(Greenhouse, { id: item, greenHs: this.greenHs, outParam: this.outParam });
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
  block;
  greenh;
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
    if (this.params.get('block') != undefined) {
      //this.block = this.params.get('block');
      this.greenH = this.params.get('greenh');

    }
    else {
      this.greenH = this.params.get('item');
      console.log(this.params.get('item'));
    }
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
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}

