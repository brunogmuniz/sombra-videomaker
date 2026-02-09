import { Component, OnInit, AfterViewInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as AOS from 'aos';
import { NavbarComponent } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import {Parceiros} from './components/parceiros/parceiros';
import {Services} from './components/services/services';
import {Footer} from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, Hero, Parceiros, Services, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {

  protected readonly title = signal('sombra-app');

  ngAfterViewInit() {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic'
    });
  }
}
