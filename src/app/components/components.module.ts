import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TileGridComponent } from './tile-grid/tile-grid.component';
import { MaterialModule } from '../material.module';
import { RngModelToggleComponent } from './rng-model-toggle/rng-model-toggle.component';

@NgModule({
  declarations: [TileGridComponent, RngModelToggleComponent],
  imports: [CommonModule, MaterialModule],
  exports: [TileGridComponent, RngModelToggleComponent],
})
export class ComponentsModule {}
