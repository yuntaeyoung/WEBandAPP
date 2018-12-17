import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qnawrite',
  templateUrl: './qnawrite.component.html',
  styleUrls: ['./qnawrite.component.css']
})
export class QnawriteComponent implements OnInit {
  user: Object;
  title: string;
  content: string;
  username: string;

  constructor(private authService: AuthService,
    private router: Router,
    private flashMessage: NgFlashMessageService) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
    }, 
    err => {
      console.log(err);
      return false;
    });
  }

  onQnASubmit(user,title,content) {

    const qna = {
      title: title,
      content: content,
      username: user.name
    }

    console.log(user.name);
    console.log(content);
    console.log(title);

    console.log(qna);

    this.authService.writeQnA(qna).subscribe(data => {
      if(data.success) {
        this.flashMessage.showFlashMessage({
          messages: ['Write Success'], 
          type: 'success', 
          timeout:2000
        });
        this.router.navigate(['/qna']);
      } else {
        this.flashMessage.showFlashMessage(
          {messages: ['Something went wrong'], 
          type: 'danger', 
          timeout:3000
        });
      }
    })

    // this.authService.authenticateUser(qna).subscribe(data => {
    //   if(data.success) {
    //     this.authService.storeUserData(data.token, data.user);
    //     this.flashMessage.showFlashMessage({
    //       messages: [data.msg], 
    //       type: 'success', 
    //       timeout:3000
    //     });
    //     this.router.navigate(['dashboard']);
    //   } else {
    //     this.flashMessage.showFlashMessage({
    //         messages: [data.msg], 
    //         type: 'danger', 
    //         timeout:3000
    //       });
    //       this.router.navigate(['login']);
    //   }
    // });
  }


}
