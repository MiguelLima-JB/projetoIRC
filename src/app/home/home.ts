import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  //header
  images = {
    logo: 'images/logo.png',
  };

  menu = ['Noticias', 'Sorteios', 'Contato', 'Sobre'];

  //colorBullets
  colorBullet: string = 'red';
  colorBullet1: string = '#9190909c';
  colorBullet2: string = '#9190909c';

  //slide dos banners
  imgsBanner = [
    'images/img-chamada.png',
    'images/img-chamada02.png',
    'images/img-chamada03.png',
  ];
  banner: string = this.imgsBanner[0];

  sliderNext() {
    if (this.banner == this.imgsBanner[0]) {
      this.colorBullet1 = 'red';
      this.colorBullet = '#9190909c';
      this.banner = this.imgsBanner[1];
    } else if (this.banner == this.imgsBanner[1]) {
      this.colorBullet1 = '#9190909c';
      this.colorBullet = '#9190909c';
      this.colorBullet2 = 'red';
      this.banner = this.imgsBanner[2];
    } else {
      return;
    }
  }

  sliderBefore() {
    if (this.banner == this.imgsBanner[1]) {
      this.colorBullet1 = '#9190909c';
      this.colorBullet = 'red';
      this.banner = this.imgsBanner[0];
    } else if (this.banner == this.imgsBanner[2]) {
      this.colorBullet = '#9190909c';
      this.colorBullet1 = 'red';
      this.colorBullet2 = '#9190909c';
      this.banner = this.imgsBanner[1];
    } else {
      return;
    }
  }

  //botão de dropdown do menu
  dropTrue: boolean = false;

  clickDropDown() {
    if (this.dropTrue === true) {
      this.dropTrue = false;
    } else {
      this.dropTrue = true;
    }
  }

  //banner - noticias bandas
  bandas = [
    {
      imagem: 'images/ruina-icon.jpg',
      nome: 'Ruína',
    },
    {
      imagem: 'images/aurora.jpg',
      nome: 'Aurora',
    },
    {
      imagem: 'images/furia.jpeg',
      nome: 'Fúria',
    },
    {
      imagem: 'images/alternancia.jpg',
      nome: 'Alter. Local',
    },
  ];
}
