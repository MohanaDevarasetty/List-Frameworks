import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[inject-comp]',
})
export class AdDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}