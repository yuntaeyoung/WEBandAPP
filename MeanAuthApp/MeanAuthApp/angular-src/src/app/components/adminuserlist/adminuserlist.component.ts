import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { NgFlashMessageService } from 'ng-flash-messages';


@Component({
  selector: 'app-adminuserlist',
  templateUrl: './adminuserlist.component.html',
  styleUrls: ['./adminuserlist.component.css']
})
export class AdminuserlistComponent implements OnInit {
  userlist: Object;
  email: String;
  license_num: String;

  constructor(private flashMessage: NgFlashMessageService,
    private authService: AuthService,
    private router: Router) {
   }

  ngOnInit() {
    if(!this.authService.adminloggedIn())
			this.router.navigate(['/']);

    this.authService.getUserlist().subscribe(userlist => {
      this.userlist = userlist;
      console.log(this.userlist);
      }, 
      err => {
      console.log(err);
      return false;
      });
  }

  deleteUser(list){
    const user = {
      email: list.email,
      license_num: list.license_num
    }
    console.log("delete User");
    console.log(user.email);
    console.log(user.license_num);
    this.authService.deleteUser(user).subscribe(data => {
      
        this.flashMessage.showFlashMessage({
          messages: ['Delete Success '], 
          type: 'success', 
          timeout:2000
        });

        this.authService.getUserlist().subscribe(userlist => {
          this.userlist = userlist;
          console.log(this.userlist);
          }, 
          err => {
          console.log(err);
          return false;
          });
      
    })
  }
}
