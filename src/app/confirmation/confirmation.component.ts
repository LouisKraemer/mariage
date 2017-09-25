import { Component, OnInit } from '@angular/core';
import { UserServiceService} from '../user-service.service';
import { routerTransition } from '../router.animations';
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs/Observable";
import {MdSnackBar} from "@angular/material";

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
    providers: [UserServiceService],
    animations: [routerTransition()],
    host: {'[@routerTransition]': ''}
})
export class ConfirmationComponent implements OnInit {

  searchControl = new FormControl();

    public users: any;
    updateUser = null;
    userKey: string;
    searchUser = "";

  constructor(public userService: UserServiceService, public snackBar: MdSnackBar) {
    this.users = this.userService.getUsers();
  }

  ngOnInit() {
  }

  selectUser(user) {
    this.updateUser = {
      apero: user.apero,
      brunch: user.brunch,
      children: user.children,
      coming: user.coming,
      firstName: user.firstName,
      lastName: user.lastName,
      meal: user.meal
    }
    this.userKey = user.$key;
    this.searchUser = "";
  }

  updateInfo() {
    this.updateUser.answered = true;
    this.userService.updateUser(this.updateUser, this.userKey).then(_ => {
      this.updateUser = null;
      this.snackBar.open('Merci pour votre confirmation', '', {
        duration: 2000
      })
    })
  }

}
