import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { UserServiceService} from '../user-service.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
    animations: [routerTransition()],
    host: {'[@routerTransition]': ''}
})
export class AccueilComponent implements OnInit {
    
  constructor(public userService: UserServiceService) {
      userService.getUsers();
  }

  ngOnInit() {
  }

}
