import { Component, OnInit, AfterViewInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as AOS from 'aos';
import { NavbarComponent } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import {Parceiros} from './components/parceiros/parceiros';
import {Services} from './components/services/services';
import {Footer} from './components/footer/footer';
import {Loader} from './components/loader/loader';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],

})
export class App implements AfterViewInit {
  ngAfterViewInit() {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic'
    });
  }
}
