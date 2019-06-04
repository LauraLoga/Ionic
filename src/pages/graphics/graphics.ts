import { Component } from '@angular/core';
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';

declare var google;
@Component({
  templateUrl: 'template.html'
})
export class GraphicPage {
  time = new Date().getTime()
  date = new Date();

  constructor(public modalCtrl: ModalController) {
    
   }

   drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Hour', 'ºC', 'Expenses'],
      ['11:00',  16,      400],
      ['12:00',  17,      460],
      ['13:00',  18,       1120],
      ['14:00',  19,      540],
      ['15:00',  17,      540],
      ['16:00',  17,      540],
      ['17:00',  18,      540],
      ['18:00',  19,      540]
    ]);

    var options = {
      title: 'Company Performance',
      hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
      vAxis: {minValue: 0}
    };

    var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  }

  
}

@Component({
  templateUrl: 'graphics.html'
})
export class GraphicContentPage {
  character;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    var characters = [
      {
        name: 'Gollum',
        quote: 'Sneaky little hobbitses!',
        image: 'assets/imgs/avatar-gollum.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'River Folk' },
          { title: 'Alter Ego', note: 'Smeagol' }
        ]
      },
      {
        name: 'Frodo',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'assets/imgs/avatar-frodo.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Samwise Gamgee',
        quote: 'What we need is a few good taters.',
        image: 'assets/imgs/avatar-samwise.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      }
    ];
    this.character = characters[this.params.get('charNum')];
  }
  //URL data
  /**
   * 
   * 
   * 
   * curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{"username":"laura.mira.torres@gmail.com", "password":"enter1!"}' 'http://hydroponics.cti.gr:8080/api/auth/login'
   * curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{"username”:”[email]", "password”:”[password]"}' 'http://hydroponics.cti.gr:8080/api/auth/login’
   */

  dismiss() {
    this.viewCtrl.dismiss();
  }
}