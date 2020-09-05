import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { PaginationComponent } from '../pagination/pagination.component';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @ViewChild(PaginationComponent, {static: false}) pagination: PaginationComponent;
  headers: any[] = [];
  list: any[] = [];
  keyMap = new Map();
  // @Input('headers') headers: any[] = [];
  // @Input('list') list: any[] = [];
  // @Input('keyMap') keyMap = new Map();
  show = false;
  pagedItems: any[] = [];
  sortType = 'asc';

  @Input('headers')
  set setHeaders(value) {
    if (value) {
      this.headers = value;
    } else {
      this.headers = [];
    }
  }

  @Input('list')
  set setList(value) {
    if (value) {
      this.list = value;
    } else {
      this.list = [];
    }
  }

  @Input('keyMap')
  set setKeyMap(value) {
    this.keyMap = value;
    this.show = true;
    console.log(this.keyMap);
  }

  constructor(
    private utilityService: UtilityService
  ) { }

  ngOnInit() {
    this.pagedItems = Object.assign(this.list);
    // this.pagination.setPage(1);
  }

  changePagedItems(data: any[]): void {
    this.pagedItems = [];
    this.pagedItems = data;
  }

  getClass(): any {
    return this.utilityService.getClass(this.sortType);
  }

  sort(sortKey: any): void {
    let sortResult: any;
    sortResult = this.utilityService.sort(sortKey, this.list, this.sortType);
    this.list = sortResult['result'];
    this.sortType = sortResult['sortType'];
    if (this.pagination) {
      this.pagination.setPage(1);
    }
  }

}
