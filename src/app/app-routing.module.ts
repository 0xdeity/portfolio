import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes, Scroll } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs/operators';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(router: Router, viewportScroller: ViewportScroller) {
    router.events.pipe(filter((e): e is Scroll => e instanceof Scroll)).subscribe(e => {
      if (e.position) {
        // backward navigation
        viewportScroller.scrollToPosition(e.position);
      } else if (e.anchor) {
        // anchor navigation with smooth scrolling
        const anchor = document.getElementById(e.anchor);
        if (anchor) {
          anchor.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
        }
      } else {
        // forward navigation
        viewportScroller.scrollToPosition([0, 0]);
      }
    });
  }
}
