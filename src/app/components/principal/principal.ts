import { Component } from '@angular/core';
import {Footer} from "../footer/footer";
import {Hero} from "../hero/hero";
import {NavbarComponent} from "../navbar/navbar";
import {Parceiros} from "../parceiros/parceiros";
import {Services} from "../services/services";
import {About} from '../about/about';
import {Cta} from '../cta/cta';
import {Videos} from '../videos/videos';

@Component({
  selector: 'app-principal',
  imports: [
    Footer,
    Hero,
    NavbarComponent,
    Parceiros,
    Services,
    About,
    Cta,
    Videos
  ],
  templateUrl: './principal.html',
  styleUrl: './principal.css',
})
export class Principal {

}
