import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.html',
  styleUrls: ['./loader.css']
})
export class Loader implements AfterViewInit {

  constructor(private router: Router) {}

  ngAfterViewInit(): void {

    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 3000);
  }
}
