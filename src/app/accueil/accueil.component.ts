import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
    animations: [routerTransition()],
    host: {'[@routerTransition]': ''}
})
export class AccueilComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
