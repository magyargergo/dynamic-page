import { Component, OnInit, Input } from '@angular/core';

import { Slide } from './slide.model';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  providers: []
})
export class SliderComponent implements OnInit {
  @Input() slides: Array<Slide>;

  constructor() {}

  ngOnInit() {}
}
