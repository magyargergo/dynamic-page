import { CoreComponent } from './core.component';
import { NavigationBarComponent } from './navigation-header/navigation-bar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressBarModule } from 'primeng/progressbar';
import { CarouselModule } from 'primeng/carousel';

import { CarouselComponent } from './carousel/carousel.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@NgModule({
  imports: [CommonModule, ProgressBarModule, CarouselModule],
  declarations: [
    CarouselComponent,
    ProgressBarComponent,
    NavigationBarComponent,
    CoreComponent
  ],
  exports: [CoreComponent]
})
export class CoreModule {}
