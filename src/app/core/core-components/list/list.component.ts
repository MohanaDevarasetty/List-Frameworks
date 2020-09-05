import { Component, OnInit, Input } from '@angular/core';
import { ListService } from '../../services/list.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('parentPage') parentPage: string;
  tableDetails: any;
  headers: any[] = [];
  keyMap = new Map();
  list: any[] = [];
  enableTable = false;
  constructor(
    private listService: ListService,
    private utilityService: UtilityService
  ) { }

  ngOnInit() {
    this.getTableListDetails(this.parentPage);
  }

  getTableListDetails(parentPage: string): void {
    // this.enableTable = false;
    this.listService.getTableDetails(parentPage).subscribe((res: any) => {
      if (res) {
        this.tableDetails = res;
        this.getColumnHeadersMap(res.column_names);
        this.getHeaders(res.column_names);
        this.list = res.results;
        this.enableTable = true;
      }
    });
  }

  getColumnHeadersMap(list: any[]): void {
    this.keyMap = this.utilityService.extractColumnNamesFromObject(list);
  }

  getHeaders(list: any[]): void {
    this.headers = this.utilityService.extractColumnKeysList(list);
  }




}
