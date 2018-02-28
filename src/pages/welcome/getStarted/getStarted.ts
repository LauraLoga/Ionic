import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { Welcome } from '../welcome';


@Component({
  templateUrl: 'getStarted.html'
  
})
export class GetStarted {
  
  constructor(public navCtrl: NavController) {
    
  }
  goTo() {
    this.navCtrl.push(Welcome);
    
  }
}

