import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
} from '@ionic-native/google-maps'

@Component({
  selector: 'app-gps',
  templateUrl: './gps.page.html',
  styleUrls: ['./gps.page.scss'],
})

export class GpsPage {
  map: GoogleMap;

  constructor(private googlemaps: GoogleMaps) {
    
  }

  ionDidLoad() {
    this.cargarMapa();
  }

  cargarMapa() {
    let opcionesMapa : GoogleMapOptions = {
      mapType: 'MAP_TYPE_TERRAIN',
      controls: {
        compass: true,
        myLocationButton: true,
        zoom: true
      }, 
      camera: {
        target: {
          lat: 43.0741904,
          lng: -89.3809802
        },
      zoom: 10
      }
    };

    this.map = this.googlemaps.create('map_canvas', opcionesMapa);
    this.map.one(GoogleMapsEvent.MAP_READY).then(
      resultado => {
        console.log('mapa listo');
      }
    ).catch(error => {
      console.log('error', error)
    });
  }
}