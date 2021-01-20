import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NatoursComponent } from './natours.component';
import { NatourRoutingModule } from './natour-routing.module';
import { CardComponent } from './card/card.component';
import { NatIntroComponent } from './nat-intro/nat-intro.component';
import { NatAboutComponent } from './nat-about/nat-about.component';
import { NatFeatureComponent } from './nat-feature/nat-feature.component';
import { NatToursComponent } from './nat-tours/nat-tours.component';

@NgModule({
  declarations: [
    NatoursComponent,
    CardComponent,
    NatIntroComponent,
    NatAboutComponent,
    NatFeatureComponent,
    NatToursComponent
  ],
  imports: [CommonModule, NatourRoutingModule],
})
export class NatoursModule { }
