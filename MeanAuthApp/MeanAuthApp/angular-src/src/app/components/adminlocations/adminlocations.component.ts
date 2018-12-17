import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-adminlocations',
	templateUrl: './adminlocations.component.html',
	styleUrls: ['./adminlocations.component.css']
})

export class AdminlocationsComponent implements OnInit {
	bikestorage: Object;
	bike: Object;
	gps: Object;

	n = {
		_id: String,
		uid: String,
		latitude: String,
		longitude: String,
		Storage_name: "보관소 위치"
	}

	constructor(
		private authService: AuthService,
		private router: Router) { }

	ngOnInit() {

		if(!this.authService.adminloggedIn())
			this.router.navigate(['/']);

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

		this.authService.getGPS().subscribe(gpslist => {
			this.gps = gpslist;
			console.log(this.gps);
		},
			err => {
				console.log(err);
				return false;
			});
	}

	refrash(){
		this.authService.getGPS().subscribe(gpslist => {
			this.gps = gpslist;
			console.log(this.gps);
		},
			err => {
				console.log(err);
				return false;
			});
	}

	// google maps zoom level
	zoom: number = 14;

	// initial center position for the map
	lat: number = 37.582142;
	lng: number = 127.010369;
}