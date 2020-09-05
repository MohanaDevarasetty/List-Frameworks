import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StepperTabComponent } from './stepper-tab/stepper-tab.component';
import { InfoTabComponent } from './info-tab/info-tab.component';
import { GrowerTabComponent } from './grower-tab/grower-tab.component';


const routes: Routes = [
  {
    path: '',
    component: StepperTabComponent,
    children: [
      {
        path: 'truckInfo',
        component: InfoTabComponent
      },
      {
        path: 'growerInfo',
        component: GrowerTabComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StepperRoutingModule { }
