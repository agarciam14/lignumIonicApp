import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation/ngx';
declare var google;

@Component({
  selector: 'app-ciclo-rutas',
  templateUrl: './ciclo-rutas.page.html',
  styleUrls: ['./ciclo-rutas.page.scss'],
})

export class CicloRutasPage implements OnInit {
  @ViewChild('mapElement', {static:false}) mapElement: ElementRef;
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
  currentLocation: any = {
    lat: 0,
    lng: 0
  };
  currentDestination: any = {
    lat : 0,
    lng : 0,

  };
  bounds: any = null;
  waypoints: any[];

  constructor( private geolocation: Geolocation) {
    this.calculateAndDisplayRoute();
   }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.currentLocation.lat = 6.312330;
      this.currentLocation.lng = -75.558003;
    });
    this.currentDestination.lat = 6.168796;
    this.currentDestination.lng = -75.605667;
    const map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 16,
      center: {lat: 6.217, lng: -75.567}
    });
    this.calculateAndDisplayRoute();
    this.directionsDisplay.setMap(map);

  }

  calculateAndDisplayRoute() {
    this.directionsService.route({
      origin: this.currentLocation,
      destination: this.currentDestination,
      travelMode: google.maps.TravelMode.DRIVING,
      avoidTolls: true
    }, (response, status)=> {
      if(status === google.maps.DirectionsStatus.OK) {
        console.log(response);
        this.directionsDisplay.setDirections(response);
      }else{
        alert('Could not display directions due to: ' + status);
      }
    });  
  }

  displayRoutes(): void{

  }

}
