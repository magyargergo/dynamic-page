import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressBarModule } from 'primeng/progressbar';
import { CarouselModule } from 'primeng/carousel';

import { SliderComponent } from './slider/slider.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@NgModule({
  imports: [CommonModule, ProgressBarModule, CarouselModule],
  declarations: [SliderComponent, ProgressBarComponent],
  exports: [SliderComponent, ProgressBarComponent]
})
export class CoreModule {}
