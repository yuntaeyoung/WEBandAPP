import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  email: string;
  password: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: NgFlashMessageService) { }

  ngOnInit() {
    this.authService.show();
    this.authService.doSomethingElseUseful();
  }

  onLoginSubmit() {
    const admin = {
      email: this.email,
      password: this.password
    }

    this.authService.authenticateAdmin(admin).subscribe(data => {
      console.log(data);
      if(data.success) {
        this.authService.storeAdminData(data.token, data.admin);
        this.flashMessage.showFlashMessage({
          messages: [data.msg], 
          type: 'success', 
          timeout:3000
        });
        this.router.navigate(['/']);
      } else {
        this.flashMessage.showFlashMessage({
            messages: [data.msg], 
            type: 'danger', 
            timeout:3000
          });
          this.router.navigate(['adminlogin']);
      }
    });
  }
}
