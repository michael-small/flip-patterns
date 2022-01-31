import { Component, OnInit } from '@angular/core';

export interface Tile {
  num: number;
  toggled: boolean;
}

@Component({
  selector: 'app-tile-grid',
  templateUrl: './tile-grid.component.html',
  styleUrls: ['./tile-grid.component.scss'],
})
export class TileGridComponent implements OnInit {
  cols: number = 4;
  tiles: Tile[] = [
    { num: 1, toggled: false },
    { num: 2, toggled: false },
    { num: 3, toggled: false },
    { num: 4, toggled: false },
    { num: 5, toggled: false },
    { num: 6, toggled: false },
    { num: 7, toggled: false },
    { num: 8, toggled: false },
    { num: 9, toggled: false },
    { num: 10, toggled: false },
    { num: 11, toggled: false },
    { num: 12, toggled: false },
    { num: 13, toggled: false },
    { num: 14, toggled: false },
    { num: 15, toggled: false },
    { num: 16, toggled: false },
  ];

  constructor() {}

  ngOnInit(): void {}

  logTileNum(number: number) {
    this.tiles[number - 1].toggled = !this.tiles[number - 1].toggled;
  }
}
