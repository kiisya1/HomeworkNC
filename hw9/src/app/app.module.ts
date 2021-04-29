import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AddFormModule } from "./add-form/add-form.module";
import { AppComponent } from "./app.component";
import { CapitalLetterPipe } from "./capital-letter.pipe";
import { CommonDirectivesModule } from "./common-directives/common-directives.module";
import { DateToStringPipe } from "./date-to-string.pipe";
import { FindByNameDirective } from "./find-by-name.directive";
import { HoverHighlightDirective } from "./hover-highlight.directive";
import { SortDirective } from "./sort.directive";


@NgModule({
  declarations: [
    AppComponent,
    SortDirective,
    FindByNameDirective,
    CapitalLetterPipe,
    DateToStringPipe,
    HoverHighlightDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AddFormModule,
    CommonDirectivesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
