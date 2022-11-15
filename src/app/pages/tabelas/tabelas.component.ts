import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabelas',
  templateUrl: './tabelas.component.html',
  styleUrls: ['./tabelas.component.css']
})
export class TabelasComponent implements OnInit {

  constructor() { }
  public mangas = [
    {
        id: 1,
        name: 'Chainsawman',
        author: 'Tatsuki Fujimoto',
        volumes: 12,
        imageUrl: 'https://m.media-amazon.com/images/I/51BeRXEKuWL.jpg'
    },
    {
        id: 2,
        name: 'Sayonara Eri',
        author: 'Tatsuki Fujimoto',
        volumes: 1,
        imageUrl: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/973/807/products/sayonara-eri1-0e30410b0825df3e1816567970886034-1024-1024.jpg'
      },
    {
        id: 3,
        name: 'Vagabond',
        author: 'Inoue Takehiko',
        volumes: 38,
        imageUrl: 'https://m.media-amazon.com/images/I/91KDm4kUI2L.jpg'
    },
    {
        id: 4,
        name: 'Oyasumi Punpun',
        author: 'Asano Inio',
        volumes: 13,
        imageUrl: 'https://m.media-amazon.com/images/I/51EQ5jMPsHL.jpg'
    },
    {
        id: 5,
        name: 'Mirai Nikki',
        author: 'Esuno Sakae',
        volumes: 12,
        imageUrl: 'https://m.media-amazon.com/images/I/71qJz+b5lRL.jpg'
    },
    {
        id: 6,
        name: 'Shingeki no Kyojin',
        author: 'Isayama Hajime',
        volumes: 34,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/pt/e/e7/SnK_Volume1.png'
    }
]

  public produtos:any[] = []

  ngOnInit(): void {
    
    this.produtos.push(
      {
        id: 1,
        nome: 'Banana',
        descricao: 'Uma banana nanica',
        preco: 5.5
      }
    )

    this.produtos.push(
      {
        id: 2,
        nome: 'Maça',
        descricao: 'Uma Maçã Pera',
        preco: 8.5
      }
    )
    this.produtos.push({
      id: 3,
      nome: 'Uva',
      descricao: 'Uva Thompson sem caroço',
      preco: 10
    })
  }

}
