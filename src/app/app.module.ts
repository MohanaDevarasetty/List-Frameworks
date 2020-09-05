import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MergeRowsDesignComponent } from './merge-rows-design/merge-rows-design.component';
import { ListWritbleFormComponent } from './list-writble-form/list-writble-form.component';
import { CustomeTypeDirective } from './directives/custome-type.directive';
import { CoreComponentsModule } from './core/core-components/core-components.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MergeRowsDesignComponent,
    ListWritbleFormComponent,
    CustomeTypeDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CoreComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
