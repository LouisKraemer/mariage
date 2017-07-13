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
    
    public user: any;
    updateUser = null;
    searchUser = "";
    searchResult = [];

  constructor(public userService: UserServiceService) {
    this.getUsers();
  }

  ngOnInit() {
  }
    
    getUsers() {
        this.userService.getUsers()
            .then(data => {
            this.user = data;
        });
    }
    
    updateInfo() {
        this.userService.modifyUser(this.updateUser);
        this.updateUser = null;
    }
    
    search(value) {
        this.searchUser = value.toLowerCase();
        this.searchResult = [];
        for (var i in this.user) {
            const lastFirst = this.user[i].lastName.toLowerCase() + " " + this.user[i].firstName.toLowerCase();
            const firstLast = this.user[i].firstName.toLowerCase() + " " + this.user[i].lastName.toLowerCase();
            if ((lastFirst.indexOf(this.searchUser) != -1 || firstLast.indexOf(this.searchUser) != -1) && this.searchUser != "" && this.searchResult.length < 5) {
                this.searchResult.push(this.user[i])
            }
        }
    }
    
    selectUser(event) {
        for (var i in this.user) {
            if (this.user[i]._id == event.target.id) {
                this.searchResult = [];
                this.searchUser = "";
                this.updateUser = this.user[i];
                break;
            }
        }
    }

}