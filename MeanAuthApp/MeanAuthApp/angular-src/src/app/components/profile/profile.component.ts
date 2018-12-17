import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: Object;
  bike: Object;

  constructor(
    private flashMessage: NgFlashMessageService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
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
  }

  cancel(Bname){
    const sBike = {
      name: Bname,
      email: " ",
      reserve: "true"
    }
    console.log(sBike.name);
    console.log(sBike.email);
    this.authService.cancelBike(sBike).subscribe(data => {
      
        this.flashMessage.showFlashMessage({
          messages: ['Reservation Cancel Success'], 
          type: 'success', 
          timeout:2000
        });
    })
    window.location.reload();
  }

}
