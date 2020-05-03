import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { enableDebugTools } from '@angular/platform-browser';
declare var google;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {
  @ViewChild('mapElement', {static:false}) mapElement: ElementRef;
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
  directionForm: FormGroup;
  logs: String[] = [];
  distance: Number;
  currentLocation: any = {
    lat: 0,
    lng: 0
  };

  constructor(private fb: FormBuilder, private geolocation: Geolocation) {
    this.createDirectionForm();
  }

  ngOnInit(): void {
    let watch=this.geolocation.watchPosition();
    watch.subscribe(resultado => {
      this.logs.push("lat: "+ resultado.coords.latitude + ", long: "+ resultado.coords.longitude);
    });

    this.geolocation.getCurrentPosition().then((resp) => {
      this.currentLocation.lat = resp.coords.latitude;
      this.currentLocation.lng = resp.coords.longitude;
    }).catch((error) => {
      window.alert('Error getting location: ' + error);
    });

  }

  createDirectionForm() {
    this.directionForm = this.fb.group({
      destination: ['', Validators.required]
    });
  }


  ngAfterViewInit(): void {
    const map = new google.maps.Map(this.mapElement.nativeElement, {zoom: 8});

    map.setCenter(this.currentLocation);

    const icon = {
      url: 'assets/icon/user.png',
      scaledSize: new google.maps.Size(40, 40),
    };

    const marker = new google.maps.Marker({
      position: this.currentLocation,
      map: map,
      tittle: '',
      icon: icon
    });
    
    this.directionsDisplay.setMap(map);

  }

  radians (degree: number): number {
    // degrees to radians
    let rad: number = degree * Math.PI / 180;

    return rad;
  }
  
  haversine(lat1: number, lon1: number, lat2: number, lon2: number): number {
    // var dlat: number, dlon: number, a: number, c: number, R: number;
    let dlat, dlon, a, c, R: number;

    R = 6372.8; // km
    dlat = this.radians(lat2 - lat1);
    dlon = this.radians(lon2 - lon1);
    lat1 = this.radians(lat1);
    lat2 = this.radians(lat2);
    a = Math.sin(dlat / 2) * Math.sin(dlat / 2) + Math.sin(dlon / 2) * Math.sin(dlon / 2) * Math.cos(lat1) * Math.cos(lat2)
    c = 2 * Math.asin(Math.sqrt(a));
    return R * c;
  }
  
  calculateAndDisplayRoute(formValues) {


    const that = this;
    this.directionsService.route({
      origin: this.currentLocation,
      destination: formValues.destination,
      travelMode: 'WALKING'
    }, (response, status) => {
      if (status === 'OK') {
        that.directionsDisplay.setDirections(response);
        console.log(this.haversine(this.currentLocation.lat,this.currentLocation.lng,6.15769, -75.6431732));
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

  displayRoutes(): void{

  }

}
