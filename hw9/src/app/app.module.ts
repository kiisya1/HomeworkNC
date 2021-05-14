import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";
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
import { StudentsEffects } from "./store/effects/students.effects";
import { studentsReducer } from "./store/reducers/students.reducers";
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
    StoreModule.forRoot({
      students: studentsReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([StudentsEffects]),
  ],
  providers: [
    studentServiceProvider,
    AddFormGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
