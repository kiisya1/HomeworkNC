import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { AddFormGuard } from "./add-form.guard";
import { AppComponent } from "./app.component";
import { appRoutes } from "./app.routing";
import { CapitalLetterPipe } from "./capital-letter.pipe";
import { CommonDirectivesModule } from "./common-directives/common-directives.module";
import { DateToStringPipe } from "./date-to-string.pipe";
import { FindByNameDirective } from "./find-by-name.directive";
import { HoverHighlightDirective } from "./hover-highlight.directive";
import { NotFoundComponent } from "./not-found/not-found.component";
import { SortDirective } from "./sort.directive";
import { studentServiceProvider } from "./student-service-provider";
import { AddFormModule } from "./table/add-form/add-form.module";
import { TableComponent } from "./table/table.component";

@NgModule({
  declarations: [
    AppComponent,
    SortDirective,
    FindByNameDirective,
    CapitalLetterPipe,
    DateToStringPipe,
    HoverHighlightDirective,
    TableComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AddFormModule,
    CommonDirectivesModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    studentServiceProvider,
    AddFormGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
