import { Injectable } from '@angular/core';
import { InjectItem } from './injectItem';
import { GrowerTabComponent } from '../grower-tab/grower-tab.component';
import { InfoTabComponent } from '../info-tab/info-tab.component';

@Injectable({
  providedIn: 'root'
})
export class InjectionService {

  constructor() { }

  getInejectedItem(selectedTab: any) {
    if (selectedTab == '/growerInfo') {
      return new InjectItem(GrowerTabComponent, {})
    }
    else {
      return new InjectItem(InfoTabComponent, {})
    }
  }
}
