import { HttpClient } from "@angular/common/http";
import { InjectionToken, Provider } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot } from "@angular/router";

import { Store } from "@ngrx/store";
import { AppState } from "./store/state/app.state";
import { StudentsDebugService } from "./students-debug.service";
import { StudentsService } from "./students.service";

export const STUDENT_SERVICE = new InjectionToken<StudentsService|StudentsDebugService>("StudentsService");

function studentsFactory (http: HttpClient, route: ActivatedRouteSnapshot, store: Store<AppState>): StudentsService|StudentsDebugService {
  console.log(route.queryParams);
  if (route.queryParams.value["debug"]) {
    console.log("StudentsDebugService");
    return new StudentsDebugService(http, store);
  }
  console.log("StudentsService");
  return new StudentsService(http, store);
}

export const studentServiceProvider: Provider = {
  provide: STUDENT_SERVICE,
  useFactory: studentsFactory,
  deps: [HttpClient, ActivatedRoute, Store]
};
