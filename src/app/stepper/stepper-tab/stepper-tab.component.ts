import { Component, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { InjectionService } from '../injection/injection.service';
import { InjectItem } from '../injection/injectItem';

@Component({
  selector: 'app-stepper-tab',
  templateUrl: './stepper-tab.component.html',
  styleUrls: ['./stepper-tab.component.css']
})
export class StepperTabComponent implements OnInit {

  injecterDetails: InjectItem;
  stepperDetails: any[] = [];
  constructor(
    private router: Router,
    private injectService: InjectionService,
    private componentFactoryResolver: ComponentFactoryResolver,
    public viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit() {
    this.stepperDetails = [
      {
          "uri": "/truckInfo",
          "displayname": "Truck Info"
      },
      {
          "uri": "/growerInfo",
          "displayname": "Grower Info"
      },
      {
          "uri": "/weighing",
          "displayname": "Weighing"
      },
      {
          "uri": "/sampling",
          "displayname": "Sampling"
      },
      {
          "uri": "/binAllocation",
          "displayname": "Bin Allocation"
      },
      {
        "uri": "/binAllocation",
        "displayname": "Bin Allocation222"
    }
  ];
  this.loadDefaultComponent();
  }

  loadDefaultComponent(): void {
    this.navigtor(this.stepperDetails[0].uri);
  }

  navigtor(uri: string): void {
    // if (!this.router.url.includes('uri')) {
      this.injecterDetails = this.injectService.getInejectedItem(uri);
      this.loadComponent();
    // }
  }

  loadComponent() {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.injecterDetails.component);
    this.viewContainerRef.clear();
    let componentRef = this.viewContainerRef.createComponent(componentFactory);
    // (<InjectComponent>componentRef.instance).data = this.injecterDetails.data;
  }

}
