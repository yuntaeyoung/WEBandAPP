import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String;
  email: String;
  password: String;
  pass: String;
  license_num: String;
  license_issued: String;
  license_expiration: String;

  constructor(
    private validateService: ValidateService, 
    private flashMessage: NgFlashMessageService, 
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const user = {
      name: this.name,
      email: this.email,
      password: this.password,
      pass: this.pass,
      license_num: this.license_num,
      license_issued: this.license_issued,
      license_expiration: this.license_expiration
    }

  // Required Fields
    if(!this.validateService.validateRegister(user)) {
      this.flashMessage.showFlashMessage({messages: ['모든 사항을 작성해주세요.'], type: 'danger', timeout:2000});
      return false;
    }

    // Validate Email
    if(!this.validateService.validateEmail(user.email)) {
      this.flashMessage.showFlashMessage({messages: ['이메일 형식이 아닙니다.'], type: 'danger', timeout:2000});
      return false;
    }

    if(!this.validateService.validatepassword(user.password, user.pass)) {
      this.flashMessage.showFlashMessage({messages: ['비밀번호를 확인해주세요.'], type: 'danger', timeout:2000});
    }

    // Register User
    this.authService.registerUser(user).subscribe(data => {
      if(data.success) {
        this.flashMessage.showFlashMessage({
          messages: ['회원가입이 완료 되었습니다.'], 
          type: 'success', 
          timeout:2000
        });
        this.router.navigate(['/']);
      } else {
        this.flashMessage.showFlashMessage(
          {messages: ['Something went wrong'], 
          type: 'danger', 
          timeout:3000
        });
        this.router.navigate(['/register']);
      }
    })
  }

}
