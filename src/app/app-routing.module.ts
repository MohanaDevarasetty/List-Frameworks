import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MergeRowsDesignComponent } from './merge-rows-design/merge-rows-design.component';
import { ListWritbleFormComponent } from './list-writble-form/list-writble-form.component';


const routes: Routes = [
  // {
  //   path: '',
  //   component: ListWritbleFormComponent
  // },
  {
    path: 'list',
    component: MergeRowsDesignComponent
  },
  {
    path: 'listWritable',
    component: ListWritbleFormComponent
  },
  {
    path: '',
    loadChildren: () =>
          import('./stepper/stepper.module').then((m) => m.StepperModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
