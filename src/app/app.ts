import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Navbar } from "../components/navbar/navbar";
 import { Foooter } from '../components/foter/foooter';
import { Router,NavigationEnd } from '@angular/router';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Foooter ,NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('famms');
   showFooter: boolean = true;

  constructor(public router: Router) {
    // تابع تغييرات الروتر
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        // Footer يظهر في كل الصفحات ما عدا /home
        this.showFooter = event.url !== '/home';
      });
  }
}
