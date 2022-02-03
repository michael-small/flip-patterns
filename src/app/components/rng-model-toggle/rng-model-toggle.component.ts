import { Component, OnInit } from '@angular/core';
import { AlgorithmService } from '../services/algorithm.service';

// interface AlgorithmToggle {
//   algorith
// }
@Component({
  selector: 'app-rng-model-toggle',
  templateUrl: './rng-model-toggle.component.html',
  styleUrls: ['./rng-model-toggle.component.scss'],
})
export class RngModelToggleComponent implements OnInit {
  constructor(private algorithmService: AlgorithmService) {}

  ngOnInit(): void {
    this.algorithmService.getAlgorithm('any');
    this.algorithmService.getAlgorithm('det1', true);
    this.algorithmService.getAlgorithm('rand1', false);
  }
}
