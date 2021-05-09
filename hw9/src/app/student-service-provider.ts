import { HttpClient } from "@angular/common/http";
import { InjectionToken, Provider } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot } from "@angular/router";

import { StudentsDebugService } from "./students-debug.service";
import { StudentsService } from "./students.service";

export const STUDENT_SERVICE = new InjectionToken<StudentsService|StudentsDebugService>("StudentsService");

function studentsFactory (http: HttpClient, route: ActivatedRouteSnapshot): StudentsService|StudentsDebugService {
  console.log(route.queryParams);
  if (route.queryParams.value["debug"]) {
    console.log("StudentsDebugService");
    return new StudentsDebugService(http);
  }
  console.log("StudentsService");
  return new StudentsService(http);
}

export const studentServiceProvider: Provider = {
  provide: STUDENT_SERVICE,
  useFactory: studentsFactory,
  deps: [HttpClient, ActivatedRoute]
};
