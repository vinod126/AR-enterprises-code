import { Component, OnInit } from '@angular/core';

export interface Tile {
 cols: number;
  rows: number;
  src:string;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  tiles: Tile[] = [
    {cols: 3, rows: 1, src:"../../assets/img/interior.jpg"},
    {cols: 1, rows: 2, src:"../../assets/img/exterior.jpg"},
    {cols: 1, rows: 1, src:"../../assets/img/bench.jpg"},
    {cols: 2, rows: 1, src:"../../assets/img/pov.png"},
    {cols: 3, rows: 1, src:"../../assets/img/img1.jpg"},
    {cols: 1, rows: 2, src:"../../assets/img/img2.jpg"},
    {cols: 1, rows: 1, src:"../../assets/img/img3.jpg"},
    {cols: 2, rows: 1, src:"../../assets/img/img4.jpg"},
    {cols: 3, rows: 1, src:"../../assets/img/img5.jpg"},
    {cols: 1, rows: 2, src:"../../assets/img/img6.jpg"},
    {cols: 1, rows: 1, src:"../../assets/img/img7.jpg"},
    {cols: 2, rows: 1, src:"../../assets/img/img8.jpg"},
    {cols: 3, rows: 2, src:"../../assets/img/img9.jpg"},
    {cols: 1, rows: 2, src:"../../assets/img/img10.jpg"},

  ];

}
