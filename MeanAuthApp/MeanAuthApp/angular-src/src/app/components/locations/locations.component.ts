import { Component, OnInit } from '@angular/core';
import { identifierModuleUrl, makeBindingParser } from '@angular/compiler';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { NgFlashMessageService } from 'ng-flash-messages';


@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
	bikestorage: Object;
	bike: Object;
	user: Object;

	name: String;
  battery: Number;
  email: String;
	
	n={
		_id: String,
		uid: String,
		latitude: String,
		longitude: String,
		Storage_name: "보관소 위치"
	}

  constructor(private flashMessage: NgFlashMessageService,
	private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
	this.authService.getBikeStorage().subscribe(storageList => {
		this.bikestorage = storageList;
		console.log(this.bikestorage);
	  }, 
	  err => {
		console.log(err);
		return false;
	  });

	this.authService.getBike().subscribe(bikeList => {
		this.bike = bikeList;
		console.log(this.bike);
	  }, 
	  err => {
		console.log(err);
		return false;
	  });

	this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
    }, 
    err => {
      console.log(err);
      return false;
    });

  }

  reservation(list,email){
    const sBike = {
      name: list.name,
			battery: list.battery,
			email: email
    }
    console.log(sBike.name);
    console.log(sBike.battery);
    this.authService.reserveBike(sBike).subscribe(data => {
      
        this.flashMessage.showFlashMessage({
          messages: ['Reservation Success '], 
          type: 'success', 
          timeout:2000
        });
    })
  }

  // google maps zoom level
  zoom: number = 14;

  // initial center position for the map
  lat: number = 37.582142;
  lng: number = 127.010369;
}

// just an interface for type safety.