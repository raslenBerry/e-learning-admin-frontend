import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admin';
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  isLoginOrRegisterRoute(): boolean {
    const currentRoute = this.router.url;
    return currentRoute === '/login' || currentRoute === '/register' ||  currentRoute === '/forgot-password' ;
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }
}
