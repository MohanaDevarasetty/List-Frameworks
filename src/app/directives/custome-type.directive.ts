import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appCustomeType]'
})
export class CustomeTypeDirective {

  typeInput: string;
  constructor(private el: ElementRef) { }

  @Input('appCustomeType')
  set setInputData(value) {
      this.typeInput = value;
      this.addTypeParameter();
  }

  private addTypeParameter(): void {
      if (this.typeInput === 'checkbox') {
          this.el.nativeElement.setAttribute('type', 'checkbox');
      } else if (this.typeInput === 'radio') {
          this.el.nativeElement.setAttribute('type', 'radio');
      }
  }

}
