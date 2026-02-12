import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {isActive} from '@angular/router';

@Component({
  selector: 'app-video-card',
  imports: [CommonModule],
  templateUrl: './video-card.html',
  styleUrl: './video-card.css',
})
export class VideoCard {
  @Input() videoSrc!: string;
  @Input() title!: string;
  @Input() isActive!: boolean;
  @Input() number!: number;

  @Output() play = new EventEmitter<void>();
  @Output() ended = new EventEmitter<void>();

  playVideo() {
    this.play.emit();
  }

  onVideoEnd() {
    this.ended.emit();
  }


}
