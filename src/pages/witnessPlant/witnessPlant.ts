import { Component, Input } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from 'ionic-angular';
import { ProblemContentPage } from '../gardens/gardens';

@Component({
  templateUrl: 'witnessPlant-details.html',
})
export class WitnessPlantDetailsPage {
  item;
  device;
  inputs=[];
  attributes=[];
  token;
  upDev;
  updateform = false;
  addbutton = true;
  formUpdate: FormGroup;
  constructor(params: NavParams, private http: HttpClient, private storage: Storage, private _formBuilder: FormBuilder, private alertCtrl: AlertController, public modalCtrl: ModalController) {
    this.item = params.data.item;
    console.log(this.item);

    this.formUpdate = this._formBuilder.group({
      key: ['', { validators: Validators.required }],
      value: ['', { validators: Validators.required }],
    });

this.initializeApp();
    
  }
  initializeApp(){
    this.storage.get('token').then((val) => {
      let heads: HttpHeaders = new HttpHeaders();
      this.token = val;
      
    let url = "http://hydroponics.cti.gr:8080/api/plugins/telemetry/DEVICE/"+this.item["id"]["id"]+"/values/attributes/SHARED_SCOPE";
    //let url = 'http://hydroponics.cti.gr:8080/api/tenant/devices?type=Witness%20Plant&limit=10';

    this.http.get(url,
      {                                                                   //post headers
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-Authorization':
            'Bearer: ' + this.token
        }
      }).subscribe(data => {
       
        console.log(data.length);
        for(let i=0; i<data.length; i++){
          console.log(data[i]);
         
         this.attributes.push(data[i]);
        }
        console.log("attributes");
        console.log(this.attributes);
       // }
      });
  });  
}
  
  showform() {
    this.updateform = true;
    this.addbutton = false;
    console.log(this.item)
    console.log(this.item.id);
    this.inputs.push(1);
  }
  addInput(){
    this.inputs.push(1)
  }
  updateWitness() {
    this.storage.get('token').then((val) => {
      //this.device = this.device.extend(this.formUpdate.value;
      console.log(this.formUpdate.value);
      console.log('device after add');
      console.log(JSON.stringify(this.device));
      this.attributes.push(this.formUpdate.value)
      this.token = val;
      let url = 'http://hydroponics.cti.gr:8080/api/plugins/telemetry/DEVICE/' + this.item.id["id"] + '/timeseries/SHARED_SCOPE';
      this.http.post(url, this.formUpdate.value, {                                                                   //post headers
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-Authorization':
            'Bearer: ' + this.token
        }
      }).subscribe(data => {

        console.log('data:' + JSON.stringify(data));

        let alert = this.alertCtrl.create({
          subTitle: 'Witness plant updated'
        });
        alert.present();
        setTimeout(() => {
          alert.dismiss();
        }, 2000);
        //this.initializeApp();
      });
    });
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
  device: Object = {
  }
  createW = true;
  selectW = true;
  optCreateW = false;
  optSelectW = false;
  token;
  rtoken;
  name: string = '';
  deviceId;
  devices=[];

  constructor(public nav: NavController, private http: HttpClient, private storage: Storage, private _formBuilder: FormBuilder, private alertCtrl: AlertController, public modalCtrl: ModalController) {
    //this.ids = ["ece355f0-982e-11e9-b0bf-5111038fb504", "3d3cbf70-9a85-11e9-b0bf-5111038fb504", "01f06e20-9a86-11e9-b0bf-5111038fb504"];
    this.formWitness = this._formBuilder.group({
      name: ['', { validators: Validators.required }],
      greenhouse: ['', { validators: Validators.required }],
      block: ['', { validators: Validators.required }],
      row: ['', { validators: Validators.required }],
      planType: ['', { validators: Validators.required }],
      description: ['', {}],
      id: ['', {}],
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
    });
    //'http://hydroponics.cti.gr:8080/api/tenant/devices{?type,textSearch,idOffset,textOffset,limit}&limit=10'
    this.storage.get('token').then((val) => {

      let heads: HttpHeaders = new HttpHeaders();
      this.token = val;
      heads = heads.append('Content-Type', 'application/json');
      heads = heads.append('Accept', '*/*');
      heads = heads.append('X-Authorization', 'Bearer: ' + this.token);

      //Here is going to put getDevices with all the deviceId of the tenant customer
      //¿Has the customer devices? getDevices --> devices.push(data);
      let url = 'http://hydroponics.cti.gr:8080/api/tenant/devices?type=Witness%20Plant&limit=100';

      this.http.get(url,
        {                                                                   //post headers
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-Authorization':
              'Bearer: ' + this.token
          }
        }).subscribe(data => {
          
          for (let i = 0; i < data["data"].length; i++) {
            this.devices.push(data["data"][i]);
            
            console.log(this.devices);
          }
        });
    });

  }
  openModal(item) {
    console.log("1")
    console.log(item);
    let modal = this.modalCtrl.create(ProblemContentPage, item);
    modal.present();
  }

  createWitness() {
    this.createW = false;
    this.optCreateW = true;
    this.selectW = false;
    this.device["type"] = "witness plant";

  }
  create() {
    let auxDev = {
      "name": "",
      "type": "Witness Plant",
      "additionalInfo": {},
    };
    auxDev.additionalInfo = this.formWitness.value;
    auxDev.name = this.formWitness.value["name"];
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
 auxDev.additionalInfo['id'] = data['id']['id'];
        this.device = data;

        console.log('id auxDev' + auxDev.additionalInfo['id'])
        this.devices.push(this.device);
        console.log('data:' + JSON.stringify(data));
        console.log('devices after add' + JSON.stringify(this.devices))
        console.log('length devices after add' + this.devices)


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

  async presentAlertConfirm(item) {
    console.log(item);
    console.log("id:" + item['id']);
    const alert = await this.alertCtrl.create({
      message: 'Do you want to delete the device?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.delete(item['id']);
            console.log('delete' + item['id']);
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

  delete(id) {


    this.storage.get('token').then((val) => {
      this.token = val;
      let url = 'http://hydroponics.cti.gr:8080/api/device/' + id["id"]
      console.log(id);
      console.log(url);
      this.http.delete(url, {                                                                   //post headers
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-Authorization':
            'Bearer: ' + this.token
        }
      }).subscribe(data => {

        console.log(data);
      });
    });

    for (let i = 0; i < this.devices.length; i++) {
      if (this.devices[i]["id"] == id) {
        this.devices.splice(i, 1);
        console.log("after delete" + JSON.stringify(this.devices));
      }
    }

    let alert = this.alertCtrl.create({
      subTitle: 'Witness plant delete'
    });
    alert.present();
    setTimeout(() => {
      alert.dismiss();
    }, 2000);
    //this.initializeApp();

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
    this.nav.push(WitnessPlantDetailsPage, { item: item, device: this.device });
  }
}


