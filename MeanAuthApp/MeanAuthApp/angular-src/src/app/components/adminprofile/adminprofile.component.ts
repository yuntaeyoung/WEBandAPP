import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrls: ['./adminprofile.component.css']
})
export class AdminprofileComponent implements OnInit {
  user: Object;

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.authService.getAdminProfile().subscribe(profile => {
      console.log(profile);
      this.user = profile.user;
    }, 
    err => {
      console.log(err);
      return false;
    });
  }

}