import { ChangeDetectionStrategy, Component } from "@angular/core";
import { studentServiceProvider } from "./student-service-provider";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AppComponent {
}
