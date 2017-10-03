import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
    animations: [routerTransition()],
    host: {'[@routerTransition]': ''}
})
export class PhotosComponent implements OnInit {
  public photos = [];

  constructor() {
    for (let i = 2; i < 17; i++) {
      this.photos.push(i);
    }
  }

  ngOnInit() {
  }

}
