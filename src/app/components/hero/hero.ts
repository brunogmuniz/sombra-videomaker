import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {

  ngAfterViewInit() {
    const palavras = ['AUTÊNTICO', 'OUSADO', 'IMPACTANTE', 'ORIGINAL'];

    new Typed('.text-gradient', {
      strings: palavras,
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    });
  }


}
