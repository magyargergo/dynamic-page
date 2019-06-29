import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent {
  mode$ = this.router.events.pipe(
    filter(
      evt => evt instanceof NavigationStart || evt instanceof NavigationEnd
    ),
    map(evt => (evt instanceof NavigationStart ? 'indeterminate' : ''))
  );

  constructor(private router: Router) {}
}
