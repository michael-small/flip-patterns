import { Injectable } from '@angular/core';

interface Algorithm {
  deterministic: boolean;
  algorithmName: string;
}

@Injectable({
  providedIn: 'root',
})
export class AlgorithmService {
  constructor() {}

  getAlgorithm(algorithmName: string, deterministic?: boolean) {
    if (deterministic) {
      console.log(algorithmName);
    } else if (!deterministic) {
      console.log(algorithmName);
    } else {
      console.log(algorithmName);
    }
  }
}
