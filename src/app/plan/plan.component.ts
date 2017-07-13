import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss'],
    animations: [routerTransition()],
    host: {'[@routerTransition]': ''}
})
export class PlanComponent implements OnInit {
    
  constructor() { }

  ngOnInit() {
  }

}
