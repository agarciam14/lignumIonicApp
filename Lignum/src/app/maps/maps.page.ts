import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
declare var google;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {
  @ViewChild('mapElement', {static:false}) mapElement: ElementRef;
  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const map = new google.maps.Map(
        this.mapElement.nativeElement,
        {
          center: {lat: 6.230833, lng: -75.590553},
          zoom: 11
        });
  }

}
