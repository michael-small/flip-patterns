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
    this.changePatternDetermineOne(number);
    // this.changePatternRandomeOne(number);
    // this.changePatternRandomTwo();
  }

  changePatternDetermineOne(number: number) {
    this.tiles[number - 1].toggled = !this.tiles[number - 1].toggled;
  }

  flipTileX(number: number, offset?: number) {
    let potentialOffset = 0;
    if (offset) {
      potentialOffset = offset;
    }
    // prettier-ignore
    this.tiles[number - 1 + potentialOffset].toggled = !this.tiles[number - 1 + potentialOffset].toggled;
  }

  step: number = 0;
  changePatternRandomeOne(number: number) {
    console.log('step', this.step);
    console.log('number', number);
    switch (this.step) {
      case 0:
        this.flipTileX(number);
        break;
      case 1:
        this.flipTileX(number, 1);
        break;
      case 2:
        this.flipTileX(number, 3);
        break;
      default:
        this.flipTileX(number, 5);
        break;
    }
    this.step++;
  }

  changePatternRandomTwo() {
    let rngNum = Math.floor(Math.random() * (this.tiles.length + 1));

    if (rngNum % this.tiles.length == 0) {
      rngNum = 1;
    }

    this.flipTileX(rngNum % 16);

    this.step++;
  }
}
