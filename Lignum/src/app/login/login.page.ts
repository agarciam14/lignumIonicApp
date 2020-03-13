import { Component, OnInit } from '@angular/core';

import { GeolocalizacionServicesProvider } from '../../providers/geolocalizacion-service/geolocalizacion-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public geolocalizacionServiceProvider: GeolocalizacionServicesProvider) {
    this.testGet();
  }

  ngOnInit() {
  }

  testGet() {
    this.geolocalizacionServiceProvider.testGet('pepe', 22).subscribe(
      (data) => {
        let message = data['message'];
	console.log(message);
      }, (error) => {
        console.log(error);
      }
    );
  }

  testPost() {

  }

}
