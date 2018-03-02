import { Component, EventEmitter, Output } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Welcome } from '../welcome';


@Component({
  selector: 'getStarted',
  templateUrl: 'getStarted.html'

})
export class GetStarted {

  user: { 'name': string; 'password': string; };
  @Output() signed = new EventEmitter<boolean>();
  
  constructor(public navCtrl: NavController) {
    this.user =
    {
      'name': '',
      'password': ''
    }    
  }

  signUp(user) {
    this.user = user;
    this.signed.emit(true);
  }

  cancel() {
    this.navCtrl.push(Welcome);
  }

}
