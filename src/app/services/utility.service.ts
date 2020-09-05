import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }


  getPrivilages(list: any[]): any {
    const rolPlatFormList = list;
    const allRolePrivilegesList = [];
    let featureCodes = [];
    rolPlatFormList.filter(role => {
      if (role.privileges && role.privileges.length) {
        role.privileges.filter(privilege => {
          if ('feature_code' in privilege) {
            allRolePrivilegesList.push(privilege.feature_code);
            featureCodes.push(privilege.feature_code.code + '.' + privilege.feature_code.type);
            if ('child_menu' in privilege.feature_code) {
              const newlist: any[] = privilege.feature_code.child_menu.map(menu => {
                return privilege.feature_code.code + '.' + menu.code + '.' + menu.type;
              });
              featureCodes = featureCodes.concat(newlist);
            }
          }
        });
      }
    });
    return featureCodes = _.uniqBy(featureCodes);
  }

  extractColumnNamesFromObject(data: any[] = []): Map<string, object> {
    const map = new Map();
    if (data.length) {
        data.filter((element: string, index: any) => {
          const array = element.split('__');
          const elementObject = {
            available: array[0] === '1' ? 1 : 0,
            key: array[1] ? array[1] : 'key',
            displayName: array.length > 2 && array[2] ? array[2] : 'Column ' + (index + 1),
            type: array.length > 3 && array[3] ? array[3] : 'String',
            isActive: false
          };
          map.set(array[1], elementObject);
        });
      }
    return map;
  }

  extractColumnKeysList(data: any[] = []): any[] {
    const columnKeysList: any[] = [];
    if (data.length) {
      data.filter(element => {
        const array = element.split('__');
        // if (array[0]) {
          columnKeysList.push(array[1]);
        // }
      });
    }
    return columnKeysList;
  }

  getClass(sortType: string = 'asc'): any {
    if (sortType === 'asc') {
      return 'sorting_desc';
    } else if (sortType === 'desc') {
      return 'sorting_asc';
    }
    return 'sorting';
  }

  sort(sortKey: any, inputData: any, sortType: string = 'asc'): any {
    if (!inputData || !inputData.length) {
      const tempObj = { result: [], sortType: sortType };
      return tempObj;
    }
    if (sortType === 'asc') {
      inputData = inputData.sort(
        this.compareValues(sortKey, 'asc')
      );
      sortType = 'desc';
    } else {
      inputData = inputData.sort(
        this.compareValues(sortKey, 'desc')
      );
      sortType = 'asc';
    }
    const returnObject = { result: inputData, sortType: sortType };
    return returnObject;
  }

  compareValues(key: any, order: any = 'asc'): any {
    let current;
    let next;
    return function (currentValue: any, nextValue: any): any {
      if (!currentValue.hasOwnProperty(key) || !nextValue.hasOwnProperty(key)) {
        return 0;
      }
      if (key !== '') {
        current = (currentValue[key]) ? currentValue[key].toString().toLowerCase() : currentValue[key];
        next = (nextValue[key]) ? nextValue[key].toString().toLowerCase() : nextValue[key];
      } else {
        current = currentValue;
        next = nextValue;
      }
      let comparison = 0;
      if (current > next) {
        comparison = 1;
      } else if (current < next) {
        comparison = -1;
      } else if (current) {
        comparison = 1;
      } else if (next) {
        comparison = -1;
      }
      return order === 'desc' ? comparison * -1 : comparison;
    };
  }
}
