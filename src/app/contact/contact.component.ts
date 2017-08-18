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
        phone: '0666666666',
        mail: 'test@gmail.com'
      }]
    })
    this.cards.push({
      title: 'Le marié',
      contacts: [{
        name: 'Sébastien Lommele',
        phone: '0666666666',
        mail: 'test@gmail.com'
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
      }, {
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
        name: 'dfghjkl',
        phone: '0666666666',
        mail: 'test@gmail.com'
      }, {
        name: 'dfghjkl',
        phone: '0666666666',
        mail: 'test@gmail.com'
      }, {
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
      title: 'Contact technique',
      contacts: [{
        name: 'Louis Kraemer',
        phone: '0666581702',
        mail: 'louiskraemer@gmail.com'
      }]
    })
  }

  ngOnInit() {
  }

}
