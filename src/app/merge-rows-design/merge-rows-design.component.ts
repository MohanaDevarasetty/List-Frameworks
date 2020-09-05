import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-merge-rows-design',
  templateUrl: './merge-rows-design.component.html',
  styleUrls: ['./merge-rows-design.component.css']
})
export class MergeRowsDesignComponent implements OnInit {

  data = [];

  dataExt: any[] = [];
  constructor(
  ) {
   }

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    // this.service.getMock().subscribe(res => {
      const res = [
        {
          "org": "OSIIND.DLY.SE.ARCH.HYD",
          "resource": "Mohana",
          "project": [
            {
              "name": "IFS",
              "type": "Billable",
              "Week1": 24,
              "Week2": 8,
              "Week3": 16,
              "Week4": 40,
              "Week5": 16,
              "Week6": 0,
              "Week7": 0,
              "Week8": 16
            },
            {
              "name": "BBSI",
              "type": "Non-Billable",
              "Week1": 8,
              "Week2": 24,
              "Week3": 16,
              "Week4": 0,
              "Week5": 8,
              "Week6": 32,
              "Week7": 8,
              "Week8": 8
            },
            {
              "name": "OsiOne",
              "type": "Internal",
              "Week1": 8,
              "Week2": 8,
              "Week3": 8,
              "Week4": 0,
              "Week5": 16,
              "Week6": 8,
              "Week7": 0,
              "Week8": 0
            },
            {
              "name": "",
              "type": "PTO",
              "Week1": 0,
              "Week2": 0,
              "Week3": 0,
              "Week4": 0,
              "Week5": 0,
              "Week6": 0,
              "Week7": 32,
              "Week8": 0
            },
             {
              "name": "",
              "type": "Holiday",
              "Week1": 0,
              "Week2": 0,
              "Week3": 0,
              "Week4": 0,
              "Week5": 0,
              "Week6": 0,
              "Week7": 0,
              "Week8": 16
            },
             {
              "name": "",
              "type": "Special",
              "Week1": 0,
              "Week2": 0,
              "Week3": 0,
              "Week4": 0,
              "Week5": 0,
              "Week6": 0,
              "Week7": 0,
              "Week8": 0
            }
          ]
        },
        {
          "org": "OSIIND.DLY.SE.ARCH.HYD",
          "resource": "Aravind",
          "project": [
             {
              "name": "IFS",
              "type": "Billable",
              "Week1": 24,
              "Week2": 8,
              "Week3": 16,
              "Week4": 40,
              "Week5": 16,
              "Week6": 0,
              "Week7": 0,
              "Week8": 16
            },
            {
              "name": "OsiOne",
              "type": "Internal",
              "Week1": 16,
              "Week2": 32,
              "Week3": 32,
              "Week4": 0,
              "Week5": 32,
              "Week6": 40,
              "Week7": 8,
              "Week8": 8
            },
            {
              "name": "",
              "type": "PTO",
              "Week1": 0,
              "Week2": 0,
              "Week3": 0,
              "Week4": 0,
              "Week5": 0,
              "Week6": 0,
              "Week7": 32,
              "Week8": 0
            },
             {
              "name": "",
              "type": "Holiday",
              "Week1": 0,
              "Week2": 0,
              "Week3": 0,
              "Week4": 0,
              "Week5": 0,
              "Week6": 0,
              "Week7": 0,
              "Week8": 16
            },
             {
              "name": "",
              "type": "Special",
              "Week1": 0,
              "Week2": 0,
              "Week3": 0,
              "Week4": 0,
              "Week5": 0,
              "Week6": 0,
              "Week7": 0,
              "Week8": 0
            }
          ]
        }
      ]
      this.data = res;
      this.dataExt = res;
      this.dataExt.forEach(emp => {
        emp.project.forEach(pro => { 
          // const numberedObj = _.pickBy(pro, _.isNumber);
          // const list: any[] = _.values(numberedObj);
          // pro.value = list.reduce((acc, cur) => acc + cur, 0);
        });
        emp.billableTypeValue = emp.project.filter(item => item.type === 'Billable').length ?
          emp.project.filter(item => item.type === 'Billable')[0]['value'] : 0;
        emp.nonbillableTypeValue = emp.project.filter(item => item.type === 'Non-Billable').length  ?
          emp.project.filter(item => item.type === 'Non-Billable')[0]['value'] : 0;
        emp.internalvalue = emp.project.filter(item => item.type === 'Internal').length ? 
          emp.project.filter(item => item.type === 'Internal')[0]['value'] : 0;
        emp.ptoValue = emp.project.filter(item => item.type === 'PTO').length ? 
        emp.project.filter(item => item.type === 'PTO')[0]['value'] : 0;
        emp.holidayValue = emp.project.filter(item => item.type === 'Holiday').length ?
         emp.project.filter(item => item.type === 'Holiday')[0]['value'] : 0;
        emp.specialValue = emp.project.filter(item => item.type === 'Special').length ?
         emp.project.filter(item => item.type === 'Special')[0]['value'] : 0;
      });
      // this.processData();
    // });
  }

  private processData() {
    const statesSeen = {};
    const countiesSeen = {};

    this.dataExt = this.data.sort((a, b) => {
      const stateComp = a.org.localeCompare(b.org);
      return stateComp ? stateComp : a.resource.localeCompare(b.resource);
    }).map(x => {
      const stateSpan = statesSeen[x.org] ? 0 :
        this.data.filter(y => y.org === x.org).length;

      statesSeen[x.org] = true;

      const countySpan = countiesSeen[x.org] && countiesSeen[x.org][x.resource] ? 0 :
        this.data.filter(y => y.org === x.org && y.resource === x.resource).length;

      countiesSeen[x.org] = countiesSeen[x.org] || {};
      countiesSeen[x.org][x.resource] = true;

      return { ...x, stateSpan, countySpan };
    });
  }

}
