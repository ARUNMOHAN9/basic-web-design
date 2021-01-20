import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NatoursComponent } from './natours.component';
import { NatourRoutingModule } from './natour-routing.module';
import { NatIntroComponent } from './nat-intro/nat-intro.component';
import { NatAboutComponent } from './nat-about/nat-about.component';
import { NatFeatureComponent } from './nat-feature/nat-feature.component';
import { NatToursComponent } from './nat-tours/nat-tours.component';
import { NatPlainCardComponent } from './nat-plain-card/nat-plain-card.component';

@NgModule({
  declarations: [
    NatoursComponent,
    NatIntroComponent,
    NatAboutComponent,
    NatFeatureComponent,
    NatToursComponent,
    NatPlainCardComponent
  ],
  imports: [CommonModule, NatourRoutingModule],
})
export class NatoursModule { }
