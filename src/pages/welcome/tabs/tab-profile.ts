
import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';


@Component({
  templateUrl: 'tab-profile.html' })
export class ProfileTab implements OnInit {
  devices: Array<{ title: string; description: string }>;
  name;
  showInput = false;
  title: any;
  descr: any;

  constructor(public params: NavParams, private storage: Storage) {
    this.devices = [
      { title: 'Greenhouse', description: 'The main objective is to visualize in our phones a platform that monitoring and controlling' },
      { title: 'AEMET', description: 'The weather' },
      { title: 'Remote house', description: 'Robotic house' },
      { title: 'Greenhouse 2', description: 'The main objective is to visualize in our phones a platform that monitoring and controlling' }
    ];
  }

  ngOnInit(): void {
    this.name = this.storage.get('name').then((val) => {
      this.name = val;
    });
  }
  addDevice(){
    this.showInput=true;
    this.devices.push(this.title, this.descr);
  }
}

