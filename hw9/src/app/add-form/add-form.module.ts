import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AddFormComponent } from "./add-form.component";

import { CommonDirectivesModule } from "../common-directives/common-directives.module";

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, CommonDirectivesModule],
  declarations: [AddFormComponent],
  exports: [AddFormComponent],
})
export class AddFormModule {}
