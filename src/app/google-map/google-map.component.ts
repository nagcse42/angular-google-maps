import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.less']
})
export class GoogleMapComponent implements OnInit {
  latitude = 0;
  longitude = 0;
  constructor() { }

  ngOnInit(): void {
    if (!navigator.geolocation) {
      console.log('Location not enabled for this device..')
    } else {
      navigator.geolocation.getCurrentPosition((location) => {
        console.log(`latitude: ${location.coords.latitude}, logitude: ${location.coords.longitude}`);
        this.latitude = location.coords.latitude;
        this.longitude = location.coords.longitude;
      });
      this.watchPosition();
    }
  }

  watchPosition() {
    let destLat = 0;
    let destLon = 0;

    let position = navigator.geolocation.watchPosition((location) => {
      console.log(`latitude: ${location.coords.latitude}, logitude: ${location.coords.longitude}`);
      if (location.coords.latitude === destLat) {
        navigator.geolocation.clearWatch(position);
      }
    }, (error) => {
      console.log(error);
    }, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    });
  }

}
