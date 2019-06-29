import { Component, OnInit } from '@angular/core';
import { Carousel } from './carousel/carousel.model';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {
  slides: Array<Carousel> = [
    {
      imageUrl: 'https://picsum.photos/1920/1080?image=0'
    },
    {
      imageUrl: 'https://picsum.photos/1920/1080?image=1'
    },
    {
      imageUrl: 'https://picsum.photos/1920/1080?image=2'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
