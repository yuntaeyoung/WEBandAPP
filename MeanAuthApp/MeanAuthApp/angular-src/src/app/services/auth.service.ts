import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { tokenNotExpired } from 'angular2-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;
  admin: any;
  email: any;
  visible: boolean;

  constructor(private http:Http,
    ) {
      this.visible = false;
     }

  hide() { this.visible = false; }

  show() { this.visible = true; }

  toggle() { this.visible = !this.visible; }

  doSomethingElseUseful() { }

  getBikeStorage() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://13.125.80.236:3000/bikestorages/locations', {headers: headers})
    .pipe(map(res => res.json()));
  }

  getBike() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://13.125.80.236:3000/Bikes/infor', {headers: headers})
    .pipe(map(res => res.json()));
  }

  getGPS() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://13.125.80.236:3000/users/gpsinfor', {headers: headers})
    .pipe(map(res => res.json()));
  }

  getUserlist() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://13.125.80.236:3000/users/userinfor', {headers: headers})
    .pipe(map(res => res.json()));
  }

  getQnAlist() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://13.125.80.236:3000/users/board', {headers: headers})
    .pipe(map(res => res.json()));
  }

  getQnAreply(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://13.125.80.236:3000/users/reply', {headers: headers})
    .pipe(map(res => res.json()));
  }

  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://13.125.80.236:3000/users/register', user, {headers: headers})
      .pipe(map(res => res.json()));
  }
  
  reserveBike(bike) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(bike);
    return this.http.post('http://13.125.80.236:3000/users/reserve', bike, {headers: headers})
      .pipe(map(res => res.json()));
  }

  cancelBike(bike){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(bike);
    return this.http.post('http://13.125.80.236:3000/users/cancel', bike, {headers: headers})
      .pipe(map(res => res.json()));
  }

  deleteUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(user);
    return this.http.post('http://13.125.80.236:3000/users/removeuser', user, {headers: headers})
      .pipe(map(res => res.json()));
  }

  writeQnA(QnA){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(QnA);
    return this.http.post('http://13.125.80.236:3000/users/addBoard', QnA, {headers: headers})
      .pipe(map(res => res.json()));
  }

  deleteQnA(QnA) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(QnA);
    return this.http.post('http://13.125.80.236:3000/users/removeboard', QnA, {headers: headers})
      .pipe(map(res => res.json()));
  }

  replyQnA(reply){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(reply);
    return this.http.post('http://13.125.80.236:3000/users/addreply', reply, {headers: headers})
      .pipe(map(res => res.json()));
  }

  authenticateUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://13.125.80.236:3000/users/authenticate', user, {headers: headers})
      .pipe(map(res => res.json()));
  }

  authenticateAdmin(admin) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://13.125.80.236:3000/users/adminlogin', admin, {headers: headers})
      .pipe(map(res => res.json()));
  }

  getProfile() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://13.125.80.236:3000/users/profile', {headers: headers})
      .pipe(map(res => res.json()));
  }

  getAdminProfile() {
    let headers = new Headers();
    this.loadAdminToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://13.125.80.236:3000/users/adminprofile', {headers: headers})
      .pipe(map(res => res.json()));
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  storeAdminData(token, admin) {
    localStorage.setItem('admin_token', token);
    localStorage.setItem('admin', JSON.stringify(admin));
    this.authToken = token;
    this.admin = admin;
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loadAdminToken() {
    const token = localStorage.getItem('admin_token');
    this.authToken = token;
  }

  loggedIn() {
    return tokenNotExpired('id_token');
  }

  adminloggedIn() {
    return tokenNotExpired('admin_token');
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }


}
 