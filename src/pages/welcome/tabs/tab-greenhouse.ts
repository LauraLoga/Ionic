import { Component} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


  @Component({
    selector: 'tab-greenhouse',
    templateUrl: 'tab-greenhouse.html'
  
  })
  export class Greenhouse {
    value;
    constructor(public navCtrl: NavController, params: NavParams) {
      this.value = params;
      console.log('params from UserProfilePage', this.value); // there is no data
  
    }
    ngOnInit(): void {

    }
  }