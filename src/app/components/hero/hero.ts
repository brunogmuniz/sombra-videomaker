import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements AfterViewInit {
  @ViewChild('word') wordElement!: ElementRef;

  palavras = ['AUTÊNTICO', 'OUSADO', 'IMPACTANTE', 'ORIGINAL'];
  index = 0;

  ngAfterViewInit() {
    this.loopAnimation();
  }

  loopAnimation() {
    const el = this.wordElement.nativeElement;

    setInterval(() => {

      el.style.backgroundPosition = "0%";

      setTimeout(() => {
        el.style.backgroundPosition = "100%";
      }, 3000);

      setTimeout(() => {
        this.index = (this.index + 1) % this.palavras.length;
        el.textContent = this.palavras[this.index];
      }, 4000);

    }, 6000);
  }
}
