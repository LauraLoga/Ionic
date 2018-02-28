import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Welcome } from '../welcome';


@Component({
  templateUrl: 'getStarted.html'

})
export class GetStarted {

  user: { 'name': string; 'password': string; };
  //@Output() sign = new EventEmitter();
  // sign;
  constructor(public navCtrl: NavController) {
    this.user =
      {
        'name': '',
        'password': ''
      };
    //this.sign = false;
  }
  signUp(user) {
    //this.sign = true;
    this.navCtrl.push(Welcome, { user: this.user });
  }
  cancel() {
    this.navCtrl.push(Welcome);
  }

}
