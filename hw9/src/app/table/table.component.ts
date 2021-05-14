import { HttpClient } from "@angular/common/http";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Inject, OnInit } from "@angular/core";
import { ActivatedRoute, NavigationCancel, Router } from "@angular/router";

import { Store } from "@ngrx/store";
import { Observable, Subscription } from "rxjs";
import { Query } from "../query";
import { GetStudentsFromServer } from "../store/actions/students.actions";
import { AppState } from "../store/state/app.state";
import { Student } from "../student";
import { STUDENT_SERVICE } from "../student-service-provider";
import { StudentsDebugService } from "../students-debug.service";
import { StudentsService } from "../students.service";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TableComponent implements OnInit, DoCheck {
  oldStudents: Student[] | null = null;
  isRedHighlighted: boolean = true;
  searchName: string = "";
  searchSurname: string = "";
  needYellow: boolean;
  studentToDelete: Student | null = null;
  isPopUpShown: boolean = false;
  selectedScore: "all" | number = "all";
  dateFrom: string = "";
  dateTo: string = "";
  isPoorVision: boolean = false;
  loading: boolean = true;

  private querySubscription: Subscription;
  debug: boolean = false;
  isNavPopUpShown: boolean = false;


  constructor(
    private http: HttpClient,
    private cdr: ChangeDetectorRef,
    @Inject(STUDENT_SERVICE) public studentsService: StudentsService | StudentsDebugService,
    private route: ActivatedRoute,
    private router: Router,
    private store$: Store<AppState>) {

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationCancel) {
        this.isNavPopUpShown = !this.isNavPopUpShown;
      }
    });

    this.querySubscription = route.queryParams.subscribe(
      (queryParam) => {
        if (queryParam["isPoorVision"]) {
          this.isPoorVision = true;
        }

        if (queryParam["debug"]) {
          this.debug = queryParam["debug"];
        }
      },
    );
  }

  ngOnInit(): void {
    this.store$.dispatch(new GetStudentsFromServer);
    this.studentsService.getStudents().subscribe((): void => {
      this.loading = false;
      this.cdr.detectChanges();
    },
      (err) => console.log(err));
  }

  ngDoCheck(): void {
    if (this.oldStudents === null && this.studentsService.students?.length !== 0) {
      this.cdr.detectChanges();
      if (Array.isArray(this.studentsService.students)) {
        this.oldStudents = [...this.studentsService.students];
      }
    }
  }

  changePoorVision(): void {
    this.isPoorVision = !this.isPoorVision;
    this.changeRoute([""]);
  }

  changeHighlight(): void {
    this.isRedHighlighted = !this.isRedHighlighted;
  }

  sortAsIs(): void {
    this.studentsService.students = this.studentsService.loadedStudents.slice();
  }

  filterScore(score: number): boolean {
    return !(this.selectedScore === "all" || this.selectedScore === score);
  }

  filterDate(dateOfBirth: Date): boolean {
    let startDate: Date;
    let endDate: Date;
    if (this.dateFrom !== "" && this.dateTo !== "" ) {
      if (this.dateFrom <= this.dateTo ) {
        startDate = new Date(this.dateFrom);
        endDate = new Date(this.dateTo);
      } else {
        endDate = new Date(this.dateFrom);
        startDate = new Date(this.dateTo);
      }
    } else if (this.dateFrom === "" && this.dateTo === "") {
      startDate = new Date(1900, 0);
      endDate = new Date();
    } else if (this.dateFrom === "" &&  this.dateTo !== "") {
      startDate = new Date(1900, 0);
      endDate = new Date(this.dateTo);
    } else if (this.dateTo === "" && this.dateFrom !== "") {
      endDate = new Date();
      startDate = new Date(this.dateFrom);
    }
    return !(dateOfBirth >= startDate && dateOfBirth <= endDate);
  }

  editStudent(id: string): void {
    this.changeRoute(["/form/edit", id]);
  }

  addStudent(): void {
    this.changeRoute(["/form/create"]);
  }

  confirmDelete(student: Student): void {
    this.isPopUpShown = !this.isPopUpShown;
    this.studentToDelete = student;
  }

  cancelDelete(): void {
    this.isPopUpShown = !this.isPopUpShown;
    this.studentToDelete = null;
  }

  delete(): void {
    this.studentsService.delete(this.studentToDelete.id).subscribe(
      (data: Student) => {
        this.studentsService.students = this.studentsService.students.filter(item => item !== this.studentToDelete);
        this.studentsService.loadedStudents = this.studentsService.loadedStudents.filter(item => item !== this.studentToDelete);
        this.studentToDelete = null;
      });
    this.isPopUpShown = !this.isPopUpShown;
  }

  changeRoute(link: string[]): void {
    const query: Query = {};

    if (this.isPoorVision) {
      query.isPoorVision = true;
    }

    if (this.debug) {
      query.debug = true;
    }

    this.router.navigate(link, {
      queryParams: {
        ...query
      }
    });
  }
}
