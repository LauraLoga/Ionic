import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    templateUrl: 'crops.html'
})
export class Crops{
    
    crops: Array<{
        idCrop: string,
        idUser: string,
        name: string,
        minTemp: number,
        maxTemp:number,
        objectiveTemp:number,
        maxRoomHum:number,
        minRoomHum:number,
        objectiveRoomHum:number,
        maxLandHum:number,
        minLandHum:number,
        objectiveLandHum:number,        
        photosynthesisTime:number
    }>
    
    compartments: Array <{
        idCompartment: string,
        idCrop: string,
        name: string,
        idDevice: string
    }>
    constructor(public navCtrl: NavController, public navParams: NavParams) {
        
        
        this.crops = [
            {
                idCrop: '1',
                idUser: '1',
                name: 'Tomatoes',
                minTemp: 20,
                maxTemp:40,
                objectiveTemp:30,
                maxRoomHum:25,
                minRoomHum:10,
                objectiveRoomHum:20,
                maxLandHum:70,
                minLandHum:20,
                objectiveLandHum:50,        
                photosynthesisTime:60
            },
            {
                idCrop: '2',
                idUser: '1',
                name: 'Onions',
                minTemp: 30,
                maxTemp:50,
                objectiveTemp:40,
                maxRoomHum:35,
                minRoomHum:20,
                objectiveRoomHum:30,
                maxLandHum:60,
                minLandHum:30,
                objectiveLandHum:60,        
                photosynthesisTime:60
            }];
        this.compartments = [
            {
                idCompartment: '1',
                idCrop: '1',
                name: 'compartment 1',
                idDevice: 'greenHouse'
            },
            {
                idCompartment: '2',
                idCrop: '2',
                name: 'compartment 2',
                idDevice: 'greenHouse'
            }
        ];
    }

    addCrop(){
        
    }

}