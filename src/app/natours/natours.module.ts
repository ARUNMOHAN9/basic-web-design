import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NatoursComponent } from './natours.component';
import { NatourRoutingModule } from './natour-routing.module';
import { FirstScrollViewComponent } from './first-scroll-view/first-scroll-view.component';
import { SecondScrollViewComponent } from './second-scroll-view/second-scroll-view.component';

@NgModule({
  declarations: [NatoursComponent, FirstScrollViewComponent, SecondScrollViewComponent],
  imports: [CommonModule, NatourRoutingModule],
})
export class NatoursModule {}
