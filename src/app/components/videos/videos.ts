import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {VideoCard} from './video-card/video-card';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.html',
  styleUrl: './videos.css',
  imports: [
    VideoCard
  ]
})
export class Videos {
  activeIndex: number | null = null;

  setActive(index: number) {
    this.activeIndex = index;
  }

  resetActive() {
    this.activeIndex = null;
  }
}
