import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { ListComponent } from './list/list.component';
import { PipeModule } from '../pipe/pipe.module';
import { PaginationComponent } from './pagination/pagination.component';
import { FilterComponent } from './filter/filter.component';
import { FilterSectionComponent } from './filter-section/filter-section.component';



@NgModule({
  declarations: [TableComponent, ListComponent, PaginationComponent, FilterComponent, FilterSectionComponent ],
  imports: [
    CommonModule,
    PipeModule
  ],
  exports: [
    TableComponent, ListComponent, PaginationComponent,FilterComponent, FilterSectionComponent 
  ],
  entryComponents: [
    TableComponent, ListComponent, PaginationComponent,FilterComponent, FilterSectionComponent 
  ]
})
export class CoreComponentsModule { }
