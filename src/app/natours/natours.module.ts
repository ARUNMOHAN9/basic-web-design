import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NatoursComponent } from './natours.component';
import { NatourRoutingModule } from './natour-routing.module';

@NgModule({
  declarations: [NatoursComponent],
  imports: [CommonModule, NatourRoutingModule],
})
export class NatoursModule {}
