import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-deroulement',
  templateUrl: './deroulement.component.html',
  styleUrls: ['./deroulement.component.scss'],
    animations: [routerTransition()],
    host: {'[@routerTransition]': ''}
})
export class DeroulementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
