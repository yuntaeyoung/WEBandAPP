import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private flashMessage: NgFlashMessageService,
    private authService: AuthService,
      private router: Router) { }

  ngOnInit() {
  }

  alram(){
    this.flashMessage.showFlashMessage({
      messages: ['Iphone App Coming Soon!!'], 
      type: 'info', 
      timeout:2000
    });
  }

}
