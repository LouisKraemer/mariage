import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import {AngularFireDatabase} from "angularfire2/database";

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class UserServiceService {

    private apiUrl = '//server-weegle.herokuapp.com/api';
    data: any;

  constructor(public http: Http, public db: AngularFireDatabase) {
  }

  getUsers() {
    return this.db.list('/users');
  }

  updateUser(userData, userKey) {
    return this.db.object('/users/' + userKey).update(userData);
  }

    // getUsers() {
    //     return new Promise(resolve => {
    //         this.http.get(this.apiUrl + '/users')
    //             .map(res => res.json())
    //             .subscribe(data => {
    //             this.data = data;
    //             resolve(this.data);
    //         })
    //     })
    // }
    //
    // modifyUser(user) {
    //     return new Promise((resolve, reject) => {
    //         this.http.put(this.apiUrl + '/users/' + user._id, user)
    //         .subscribe(res => {
    //             resolve(res);
    //         }, (err) => {
    //             reject(err);
    //         })
    //     })
    // }
    //
    // findUserById(userId) {
    //     return new Promise(resolve => {
    //         this.http.get(this.apiUrl + '/users/' + userId)
    //             .map(res => res.json())
    //             .subscribe(data => {
    //             this.data = data;
    //             resolve(this.data);
    //         })
    //     })
    // }
}

