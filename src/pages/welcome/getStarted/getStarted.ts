import { Component } from '@angular/core';
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';


@Component({
  templateUrl: 'getStarted.html'
})
export class GetStarted {
  constructor(public modalCtrl: ModalController) { }
  
  openModal(sign) {
    
    let modal = this.modalCtrl.create(SignContentPage, sign);
    modal.present();
  }
}
@Component({
  templateUrl: 'sign.html'
  
})
export class SignContentPage {
  option;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    var options = [
      {
        name: 'Sign in',
      },
      {
        name: 'Sign up',
      }
    ];
    this.option = options[this.params.get('sign')];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}