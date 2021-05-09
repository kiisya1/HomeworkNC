import { Inject, Injectable } from "@angular/core";
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivate, Router,
  RouterStateSnapshot, UrlTree,
} from "@angular/router";

import { Observable } from "rxjs";
import { map, take } from "rxjs/operators";
import { STUDENT_SERVICE } from "./student-service-provider";
import { StudentsDebugService } from "./students-debug.service";
import { StudentsService } from "./students.service";

@Injectable()
export class AddFormGuard implements CanActivate {

  studentScore: number;
  id: string;

  constructor(
    private route: ActivatedRoute,
    @Inject(STUDENT_SERVICE) public studentsService: StudentsService | StudentsDebugService,
    private router: Router) {
  }

  checkStudentScore(): boolean {
    this.studentScore = this.studentsService.students.find(s => s.id === this.id).score;
    return this.studentScore !== 5;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean|UrlTree> | boolean {
    this.id = route.params["id"];
    return this.studentsService.students.length !== 0 ? this.checkStudentScore() :
    this.studentsService.getById(this.id)
      .pipe(
        take(1),
        map( student => {
          this.studentScore = student.score;
          return this.studentScore !== 5 ? true : this.router.parseUrl("/");
        }),
      );
  }
}
