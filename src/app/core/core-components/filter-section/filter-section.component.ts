import { Component, OnInit, Input } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-filter-section',
  templateUrl: './filter-section.component.html',
  styleUrls: ['./filter-section.component.css']
})
export class FilterSectionComponent implements OnInit {
  headers: any[] = [];
  keyMap = new Map();
  selection = new SelectionModel(true, []);
  @Input('headers')
  set setHeaders(value) {
    if (value) {
      this.headers = value;
    } else {
      this.headers = [];
    }
  }

  @Input('keyMap')
  set setKeyMap(value) {
    this.keyMap = value;
  }

  constructor(
    private utilityService: UtilityService
  ) { }

  ngOnInit() {
  }

  masterToggle(event: any): void {
    if (event.target.checked) {
      this.headers.filter(element => {
        if (this.keyMap.get(element).available) {
          this.keyMap.get(element).isActive = true;
          this.selection.select(element);
        }
      });
    } else {
      this.headers.filter(element => {
        this.keyMap.get(element).isActive = false;
      });
      this.selection.clear();
    }
  }

  isAllSelected(): boolean {
    const selectionLength = this.selection.selected.length;
    const allavailableColumns: any[] = this.headers.filter(element => this.keyMap.get(element).available);
    return selectionLength === allavailableColumns.length;
  }

  selectColumn(event: any, header: string): void {
    if (event.target.checked) {
      this.keyMap.get(header).isActive = true;
      this.selection.select(header);
    } else {
      this.keyMap.get(header).isActive = false;
      this.selection.deselect(header);
    }
  }

}
