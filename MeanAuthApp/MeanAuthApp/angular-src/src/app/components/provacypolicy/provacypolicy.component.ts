import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-provacypolicy',
  templateUrl: './provacypolicy.component.html',
  styleUrls: ['./provacypolicy.component.css']
})
export class ProvacypolicyComponent implements OnInit {

  constructor(private authService: AuthService,
    private router: Router,
    private flashMessage: NgFlashMessageService) { }

  ngOnInit() {
  }

  error() {
    this.flashMessage.showFlashMessage({
      messages: ['정책에 동의하셔야 회원가입이 진행됩니다.'], 
      type: 'danger', 
      timeout:5000
    });
  }

}
