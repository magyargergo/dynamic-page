import { Component } from '@angular/core';
import { Slide } from './core/slider/slide.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'dynamic-page';

  slides: Array<Slide> = [
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
}
