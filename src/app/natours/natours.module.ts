import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NatoursComponent } from './natours.component';
import { NatourRoutingModule } from './natour-routing.module';
import { NatIntroComponent } from './components/nat-intro/nat-intro.component';
import { NatAboutComponent } from './components/nat-about/nat-about.component';
import { NatFeatureComponent } from './components/nat-feature/nat-feature.component';
import { NatToursComponent } from './components/nat-tours/nat-tours.component';
import { NatPlainCardComponent } from './components/nat-plain-card/nat-plain-card.component';
import { NatAnimateCardComponent } from './components/nat-animate-card/nat-animate-card.component';
import { NatTourCardComponent } from './components/nat-tours/nat-tour-card/nat-tour-card.component';

@NgModule({
  declarations: [
    NatoursComponent,
    NatIntroComponent,
    NatAboutComponent,
    NatFeatureComponent,
    NatToursComponent,
    NatPlainCardComponent,
    NatAnimateCardComponent,
    NatTourCardComponent,
  ],
  imports: [CommonModule, NatourRoutingModule],
})
export class NatoursModule { }
