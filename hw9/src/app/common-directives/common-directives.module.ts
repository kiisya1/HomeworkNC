import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PoorVisionDirective } from "./poor-vision.directive";


@NgModule({
  declarations: [
    PoorVisionDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    PoorVisionDirective,
  ]
})
export class CommonDirectivesModule { }
