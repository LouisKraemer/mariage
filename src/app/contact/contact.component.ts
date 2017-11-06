import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
    animations: [routerTransition()],
    host: {'[@routerTransition]': ''}
})
export class ContactComponent implements OnInit {

  public cards: any = [];

  constructor() {

    this.cards.push({
      title: 'La mariée',
      contacts: [{
        name: 'Pauline Kraemer',
        phone: '+33 6 30 04 06 90',
        mail: 'paulinekraemer0@gmail.com'
      }]
    })
    this.cards.push({
      title: 'Le marié',
      contacts: [{
        name: 'Sébastien Lommele',
        phone: '+33 6 47 05 87 18',
        mail: 'sebastien.lommele@hotmail.fr'
      }]
    })
    this.cards.push({
      title: 'Les témoins (Pauline)',
      contacts: [{
        name: 'dfghjkl',
        phone: '0666666666',
        mail: 'test@gmail.com'
      }, {
        name: 'dfghjkl',
        phone: '0666666666',
        mail: 'test@gmail.com'
      }]
    })
    this.cards.push({
      title: 'Les témoins (Sébastien)',
      contacts: [{
        name: 'Benoît Hetzel',
        phone: '+33 6 22 03 68 72',
        mail: 'hetzel.benoit@gmail.com'
      }, {
        name: 'Gautier Ohl',
        phone: '+33 6 31 46 51 39',
        mail: 'gautier.ohl@gmail.com'
      }]
    })
    this.cards.push({
      title: 'Contact technique',
      contacts: [{
        name: 'Louis Kraemer',
        phone: '+33 6 66 58 17 02',
        mail: 'louiskraemer@gmail.com'
      }]
    })
  }

  ngOnInit() {
  }

}
