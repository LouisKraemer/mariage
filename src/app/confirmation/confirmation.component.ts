import { Component, OnInit } from '@angular/core';
import { UserServiceService} from '../user-service.service';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
    providers: [UserServiceService],
    animations: [routerTransition()],
    host: {'[@routerTransition]': ''}
})
export class ConfirmationComponent implements OnInit {

    public users: any;
    updateUser = null;
    userKey: string;
    showConfirmPopup = false;
    searchUser = "";

  constructor(public userService: UserServiceService) {
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
    this.userService.updateUser(this.updateUser, this.userKey).then(_ => {
      this.updateUser = null;
      this.showConfirmPopup = true;
      setTimeout(() => {
        this.showConfirmPopup = false;
      }, 2000);
    })
  }

}
