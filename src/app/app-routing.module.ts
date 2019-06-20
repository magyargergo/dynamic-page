import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DelayGuard } from './guards/delay-guard.service';
import { MyComponent } from './my-component/my-component.component';

const routes: Routes = [
  {
    path: '',
    component: MyComponent,
    canActivate: [
      DelayGuard
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: false }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
