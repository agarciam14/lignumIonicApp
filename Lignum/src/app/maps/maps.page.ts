import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
declare var google;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {
  latitude: any;
  longitude; any;
  @ViewChild('mapElement', {static:false}) mapElement: ElementRef;
  constructor(private geolocation: Geolocation) {}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      const map = new google.maps.Map(
          this.mapElement.nativeElement,
          {
            center: {lat: 6.230833, lng: -75.590553},
            zoom: 15
          });
          /*Localización del macador*/
          const pos = {
            lat: this.latitude,
            lng: this.longitude
          };
          map.setCenter(pos);
          const icon = {
            url: 'assets/icon/user.png',
            scaledSize: new google.maps.Size(40, 40),
          };
          const marker = new google.maps.Marker({
            position: pos,
            map: map,
            tittle: '',
            icon: icon
          });

     }).catch((error) => {
       console.log('Error getting location', error);
     });    
  }

}
