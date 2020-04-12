import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation/ngx';
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
  currentLocation: any = {
    lat: 0,
    lng: 0
  };
  constructor(private fb: FormBuilder, private geolocation: Geolocation) {
    this.createDirectionForm();
  }

  ngOnInit(): void {
  }

  createDirectionForm() {
    this.directionForm = this.fb.group({
      destination: ['', Validators.required]
    });
  }

  ngAfterViewInit(): void {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.currentLocation.lat = resp.coords.latitude;
      this.currentLocation.lng = resp.coords.longitude;
    });
    const map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 16,
      center: {lat: 6.217, lng: -75.567}
    });
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

  calculateAndDisplayRoute(formValues) {
    const that = this;
    this.directionsService.route({
      origin: this.currentLocation,
      destination: formValues.destination,
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        that.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

}
