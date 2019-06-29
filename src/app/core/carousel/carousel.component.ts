import { Component, OnInit, Input } from '@angular/core';

import { Carousel } from './carousel.model';

@Component({
  selector: 'app-slider',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: []
})
export class CarouselComponent implements OnInit {
  @Input() slides: Array<Carousel>;

  constructor() {}

  ngOnInit() {}
}
