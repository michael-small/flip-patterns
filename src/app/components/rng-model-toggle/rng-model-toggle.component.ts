import { Component, OnInit } from '@angular/core';
import { AlgorithmService } from '../services/algorithm.service';
import { Algorithm } from '../models/algorithm';

@Component({
  selector: 'app-rng-model-toggle',
  templateUrl: './rng-model-toggle.component.html',
  styleUrls: ['./rng-model-toggle.component.scss'],
})
export class RngModelToggleComponent implements OnInit {
  constructor(private algorithmService: AlgorithmService) {}

  currentAlgorithm: Algorithm = { algorithmName: '' };

  algorithms: Algorithm[] = [
    { algorithmName: 'det0', deterministic: false },
    { algorithmName: 'nondet0', deterministic: true },
    { algorithmName: 'rand0' },
  ];

  ngOnInit(): void {
    for (let alg = 0; alg < this.algorithms.length; alg++) {
      this.algorithmService.getAlgorithm(this.algorithms[alg]);
    }
  }

  setRNG(rngModel: number) {
    console.log(rngModel);
    this.currentAlgorithm = this.algorithms[rngModel];
    console.log(this.currentAlgorithm);
  }
}
