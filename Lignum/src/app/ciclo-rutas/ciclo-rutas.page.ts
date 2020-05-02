import {AfterViewInit, Component, ElementRef, OnInit, ViewChild, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  currentStart: any = {};
  currentDestination: any = {};
  bounds: any = null;
  waypoints: any[];

  constructor(private route: ActivatedRoute, private router: Router, private geolocation: Geolocation) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state){
        this.currentStart = this.router.getCurrentNavigation().extras.state.start;
        this.currentDestination = this.router.getCurrentNavigation().extras.state.destination;
        this.calculateAndDisplayRoute();
      }
    });
   }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    const map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 16,
      center: {lat: 6.217, lng: -75.567}
    });
    this.calculateAndDisplayRoute();
    this.directionsDisplay.setMap(map);

  }

  calculateAndDisplayRoute() {
    this.directionsService.route({
      origin: this.currentStart,
      destination: this.currentDestination,
      travelMode: google.maps.TravelMode.WALKING,
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
