import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NatoursComponent } from './natours.component';
import { NatourRoutingModule } from './natour-routing.module';
import { FirstScrollViewComponent } from './first-scroll-view/first-scroll-view.component';
import { SecondScrollViewComponent } from './second-scroll-view/second-scroll-view.component';
import { CardComponent } from './card/card.component';
import { ThirdScrollViewComponent } from './third-scroll-view/third-scroll-view.component';
import { FourthScrollViewComponent } from './fourth-scroll-view/fourth-scroll-view.component';

@NgModule({
  declarations: [
    NatoursComponent,
    FirstScrollViewComponent,
    SecondScrollViewComponent,
    CardComponent,
    ThirdScrollViewComponent,
    FourthScrollViewComponent
  ],
  imports: [CommonModule, NatourRoutingModule],
})
export class NatoursModule { }
