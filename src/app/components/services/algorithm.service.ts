import { Injectable } from '@angular/core';
import { Algorithm } from '../models/algorithm';

@Injectable({
  providedIn: 'root',
})
export class AlgorithmService {
  constructor() {}

  getAlgorithm(algorithm: Algorithm) {
    if (algorithm.deterministic) {
      console.log(algorithm.algorithmName);
    } else if (!algorithm.deterministic) {
      console.log(algorithm.algorithmName);
    } else {
      console.log(algorithm.algorithmName);
    }
  }
}
