import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss'],
    animations: [routerTransition()],
    host: {'[@routerTransition]': ''}
})
export class ListeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
