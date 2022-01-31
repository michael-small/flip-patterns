import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TileGridComponent } from './tile-grid/tile-grid.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [TileGridComponent],
  imports: [CommonModule, MaterialModule],
  exports: [TileGridComponent],
})
export class ComponentsModule {}
