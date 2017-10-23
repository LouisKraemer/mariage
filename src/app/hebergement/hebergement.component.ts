import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-hebergement',
  templateUrl: './hebergement.component.html',
  styleUrls: ['./hebergement.component.scss'],
    animations: [routerTransition()],
    host: {'[@routerTransition]': ''}
})
export class HebergementComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
