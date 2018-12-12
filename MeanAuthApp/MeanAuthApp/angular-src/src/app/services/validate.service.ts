import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  validateRegister(user) {
    if(user.name == undefined || user.email == undefined || user.password == undefined || user.pass == undefined || user.license_num == undefined || user.license_issued == undefined || user.license_expiration == undefined) {
      return false;
    } else {
      return true;
    }
  }

  validatepassword(password, pass){
    if(password == pass)
      return true;
    else return false;
  }

  validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
}
