import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepperRoutingModule } from './stepper-routing.module';
import { StepperTabComponent } from './stepper-tab/stepper-tab.component';
import { InfoTabComponent } from './info-tab/info-tab.component';
import { GrowerTabComponent } from './grower-tab/grower-tab.component';
import { AdDirective } from './anchor.directive';
import { CoreComponentsModule } from '../core/core-components/core-components.module';


@NgModule({
  declarations: [StepperTabComponent, InfoTabComponent, GrowerTabComponent, AdDirective],
  imports: [
    CommonModule,
    StepperRoutingModule,
    CoreComponentsModule
  ]
})
export class StepperModule { }
