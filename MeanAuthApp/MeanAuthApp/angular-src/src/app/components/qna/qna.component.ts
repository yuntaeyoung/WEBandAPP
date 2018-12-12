import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';

@Component({
  selector: 'app-qna',
  templateUrl: './qna.component.html',
  styleUrls: ['./qna.component.css']
})
export class QnaComponent implements OnInit {
  QnAlist: Object;

  constructor(private flashMessage: NgFlashMessageService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.authService.getQnAlist().subscribe(QnAlist => {
      this.QnAlist = QnAlist;
      console.log(this.QnAlist);
      }, 
      err => {
      console.log(err);
      return false;
      });
  }

  deleteQnA(list){
    const QnA = {
      title: list.title,
      username: list.username
    }
    console.log("delete QnA");
    console.log(QnA.title);
    console.log(QnA.username);
    this.authService.deleteQnA(QnA).subscribe(data => {
      
      this.flashMessage.showFlashMessage({
        messages: ['Delete Success '], 
        type: 'success', 
        timeout:2000
      });

      window.location.reload();
    
  })
  }

  selectQnA(list){
    const QnA = {
      title: list.title,
      username: list.username
    }

    console.log("select QnA");
    console.log(QnA.title);
    console.log(QnA.username);
    
    this.router.navigate(['/viewqna', list]);
  }

}
