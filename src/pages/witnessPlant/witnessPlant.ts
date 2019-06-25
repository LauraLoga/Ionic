import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from 'ionic-angular';

@Component({
  templateUrl: 'witnessPlant-details.html',
})
export class WitnessPlantDetailsPage {
  item;
  constructor(params: NavParams) {
    this.item = params.data.item;
  }
}

@Component({
  selector: 'page-list',
  templateUrl: 'witnessPlant.html'
})
export class WitnessPage {
  formWitness: FormGroup;
  httpClient: any;
  selection;
  items = [];
  device = {
    "name": "",
    "type": "",
    "additionalInfo": {},
  }
  createW = true;
  selectW = true;
  optCreateW = false;
  optSelectW = false;
  token;
  rtoken;
  name: string = '';
  deviceId;
  devices = [];
  ids = ['7ef46f90-8d41-11e9-b0bf-5111038fb504','05ac4ad0-953a-11e9-b0bf-5111038fb504','7042bca0-958d-11e9-b0bf-5111038fb504','fb5977b0-958e-11e9-b0bf-5111038fb504'];
    
  
  constructor(public nav: NavController, private http: HttpClient, private storage: Storage, private _formBuilder: FormBuilder, private alertCtrl: AlertController) {
    
    this.formWitness = this._formBuilder.group({
      name: ['', { validators: Validators.required }],
      greenhouse: ['', { validators: Validators.required }],
      block: ['', { validators: Validators.required }],
      row: ['', { validators: Validators.required }],
      planType: ['', { validators: Validators.required }],
      description: ['', { validators: Validators.required }],
    });
    this.initializeApp();

  }
  initializeApp() {
    //obtain the access token
    //store the access token to some variable
    //check that we can connect successfully
    //keep token in local storage
    // to get token from terminal paste: curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{"username":"laura.mira.torres@gmail.com", "password":"enter1!"}' 'http://hydroponics.cti.gr:8080/api/auth/login'
    let heads: HttpHeaders = new HttpHeaders();
    heads = heads.append('Content-Type', 'application/json');
    heads = heads.append('Accept', 'application/json');
    let obs = this.http.post(
      "http://hydroponics.cti.gr:8080/api/auth/login",                    //URL
      '{"username":"laura.mira.torres@gmail.com", "password":"enter1!"}', //data
      {                                                                   //post headers
        headers: heads
      });
    obs.subscribe((response) => {
      this.token = response["token"];
      this.rtoken = response["refreshToken"];
      this.storage.set('token', this.token);
      this.storage.set('rtoken', this.rtoken);

      // check the token works
      //local variable
      // let heads: HttpHeaders = new HttpHeaders();
      

    });
    this.storage.get('token').then((val) => {
      
      let heads: HttpHeaders = new HttpHeaders();
      this.token = val;
      console.log('token in storage \n' + this.token);
      heads = heads.append('Content-Type', 'application/json');
      heads = heads.append('Accept', 'application/json');
      heads = heads.append('X-Authorization', 'Bearer: ' + this.token);

      //Here is going to put getDevices with all the deviceId of the tenant customer
      //¿Has the customer devices? getDevices --> devices.push(data);
      for (let i=0; i<this.ids.length; i++){
      this.http.get('http://hydroponics.cti.gr:8080/api/device/'+this.ids[i],
        {                                                                   //post headers
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-Authorization':
              'Bearer: ' + this.token
          }
        }).subscribe(data => {
          console.log(i);
          console.log('data:' + JSON.stringify(data));
          this.device = data["additionalInfo"]
          this.devices.push(this.device);
          //this.storage.set('devices', this.devices);
        });
      }
    });
    
  }


  createWitness() {
    this.createW = false;
    this.optCreateW = true;
    this.selectW = false;
    this.device.type = "witness plant";

  }
  create() {
    //this.g.emit(this.formWitness.value.name)
    let auxDev = {
      "name": "",
      "type": "Witness Plant",
      "additionalInfo": {},
    };
    auxDev.additionalInfo = this.formWitness.value;
    auxDev.name = this.formWitness.value["name"];
    // this.storage.set('device', this.device["additionalInfo"]);
    // this.storage.set('devices', this.devices);
    console.log("devices:" + this.devices);
    console.log("device" + JSON.stringify(auxDev["additionalInfo"]));
    this.optCreateW = false;
    this.createW = true;
    this.selectW = true;
    this.storage.get('token').then((val) => {
      this.token = val;
      let url = 'http://hydroponics.cti.gr:8080/api/device';
      this.http.post(url, auxDev, {                                                                   //post headers
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-Authorization':
          'Bearer: ' + this.token
        }
      }).subscribe(data => {
        this.devices.push(auxDev["additionalInfo"]);
        this.ids.push(data["id"]["id"]);
        console.log('data:' + JSON.stringify(data));
        console.log('ids after add'+this.ids)
        console.log('devices after add'+JSON.stringify(this.devices))
        console.log('length devices after add'+this.devices)
        

        let alert = this.alertCtrl.create({
          subTitle: 'Witness plant added'
        });
        alert.present();
        setTimeout(() => {
          alert.dismiss();
        }, 2000);
        //this.initializeApp();
      });
    });
  }

  async presentAlertConfirm() {
    const alert = await this.alertCtrl.create({
      message: 'Do you want to delete the device?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.delete();
            console.log('delete');
          }
        }, {
          text: 'No',
          handler: () => {
          }
        }
      ]
    });

    await alert.present();
  }

delete(){
  this.devices
}
  back() {
    this.optCreateW = false;
    this.createW = true;
    this.selectW = true;
  }
  selectWitness() {
    this.selectW = false;
    this.optSelectW = true;


  }
  openNavDetailsPage(item) {
    this.nav.push(WitnessPlantDetailsPage, { item: item });

  }

  /*
    //event handler for the select element's change event
    selectGreenhouse(event: any) {
      //update the ui
      this.selection = event.target.value;
      this.device.greenhouse = this.selection;
    }
    
  */
     /* {
       'title': 'Ventiladores',
       'icon': 'nuclear',
       'description': 'Sistema de ventilación',
       'color': '#FFFFF'
     },
     {
       'title': 'Humidificador',
       'icon': 'water',
       'description': 'Generador de humedad',
       'color': '#3575AC'
     },
     {
       'title': 'Iluminación',
       'icon': 'bulb',
       'description': 'One of the most popular programming languages on the Web!',
       'color': '#FFD439'
     },
     {
       'title': 'Gate',
       'icon': 'exit',
       'description': 'Open the gate. se utilizara un pequeño motor de 12Vdc para levantar el carrete que tire de la compuerta.',
       'color': '#FFFFF'
     },
   */

}