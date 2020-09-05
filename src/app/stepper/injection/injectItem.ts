import { Type } from '@angular/core';

export class InjectItem {
  constructor(public component: Type<any>, public data?: any) {}
}
