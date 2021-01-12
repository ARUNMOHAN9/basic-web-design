import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NatoursComponent } from './natours.component';
import { NatourRoutingModule } from './natour-routing.module';
import { FirstScrollViewComponent } from './first-scroll-view/first-scroll-view.component';

@NgModule({
  declarations: [NatoursComponent, FirstScrollViewComponent],
  imports: [CommonModule, NatourRoutingModule],
})
export class NatoursModule {}
