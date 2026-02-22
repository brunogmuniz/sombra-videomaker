import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-parceiros',
  imports: [CommonModule],
  templateUrl: './parceiros.html',
  styleUrl: './parceiros.css',
})
export class Parceiros {

  parceiros = [
    {
      nome: 'Bruno Muniz',
      role: 'Full Stack Developer',
      rating: 5,
      imagem: 'assets/logo__bruno.png',
      descricao: `Sombra me ajudou muito no desenvolvimeento e criação de meus videos, auxiliando com roteiros, edições e crescimento da minha pagina, quanto no meu canal do Youtube`,
      link: 'https://www.instagram.com/sombra_videomaker/'
    },
    {
      nome: 'Kalebe Costa',
      role: 'Cantor e Professor de Música',
      rating: 5,
      imagem: 'assets/logo__kc.avif',
      descricao: `Eu prezo sempre por registrar cada mometo da minha carreira, e pra isso o Sombra faz toda a diferença, me deixando tranquilo nos eventos enquanto tenho certeza que terei bons registros`,
      link: 'https://www.instagram.com/sombra_videomaker/'
    },
    {
      nome: 'Christian Brum',
      role: 'Especializado em criação de marcas e artes',
      rating: 5,
      imagem: 'assets/logo__cb.png',
      descricao: `O Sombra te da total liberdade de criar e se expressar nos conteúdos, mas quando a coisa começa a degringolar ele orienta na criação de conteúdo ajudando muito no meu crescimento`,
      link: 'https://www.instagram.com/sombra_videomaker/'
    },
    {
      nome: 'Carina',
      role: 'Cabeleireira',
      rating: 5,
      imagem: 'assets/logo_carina.png',
      descricao: `Eu tenho muita dificuldade em falar e me expressar, e o sombra faz com que eu mostre meu trabalho de maneira muito mais tranquila, e fez eu me desenvolver melhor.`,
      link: 'https://www.instagram.com/carina_mannnn/'
    },

  ];


}
