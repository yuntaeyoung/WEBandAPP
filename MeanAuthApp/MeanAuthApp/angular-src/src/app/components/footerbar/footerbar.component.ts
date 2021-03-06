import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footerbar',
  templateUrl: './footerbar.component.html',
  styleUrls: ['./footerbar.component.css']
})
export class FooterbarComponent implements OnInit {

  constructor(  private authService: AuthService,
    private router: Router,
    private flashMessage: NgFlashMessageService) { }

  ngOnInit() {
  }

  onLogoutClick() {
    this.authService.logout();
    this.flashMessage.showFlashMessage({
      messages: ['You are logged out'], 
      type: 'success', 
      timeout: 3000
    });
    this.router.navigate(['login']);
    return false;
  }


}
