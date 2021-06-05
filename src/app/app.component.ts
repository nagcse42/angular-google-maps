import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'angular-google-maps';

  ngOnInit() {
    if (!navigator.geolocation) {
      console.log('Location not enabled for this device..')
    } else {
      navigator.geolocation.getCurrentPosition((location) => {
        console.log(`latitude: ${location.coords.latitude}, logitude: ${location.coords.longitude}`)
      });
    }
  }

  watchPosition() {
    navigator.geolocation.watchPosition((location) => {
      console.log(`latitude: ${location.coords.latitude}, logitude: ${location.coords.longitude}`)
    }, (error) => {
      console.log(error);
    }, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    });
  }
}
