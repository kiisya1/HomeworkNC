import {
  AfterContentChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component, Inject,
  OnDestroy,
  OnInit,
} from "@angular/core";

import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";

import { Query } from "../../query";
import { Student } from "../../student";
import { STUDENT_SERVICE } from "../../student-service-provider";
import { StudentsDebugService } from "../../students-debug.service";
import { StudentsService } from "../../students.service";
import { dateValidator } from "./date-validator";
import { nameValidator } from "./fullname-validator";

@Component({
  selector: "add-form",
  templateUrl: "./add-form.component.html",
  styleUrls: ["./add-form.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddFormComponent implements OnInit, OnDestroy, AfterContentChecked {
  _student: Student | null = null;
  id: string | null = null;
  debug: boolean = false;
  isPoorVision: boolean = false;
  formFull: boolean = false;
  private routeSubscription: Subscription;
  private querySubscription: Subscription;
  private studentSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    @Inject(STUDENT_SERVICE) public studentsService: StudentsService | StudentsDebugService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    ) {

    this.routeSubscription = this.route.params.subscribe(
      (params) => {
        if (params["id"]) {
          this.id = params["id"];
        }
      },
    );
    this.querySubscription = this.route.queryParams.subscribe(
      (queryParam) => {
        if (queryParam["isPoorVision"]) {
          this.isPoorVision = queryParam["isPoorVision"];
        }

        if (queryParam["debug"]) {
          this.debug = queryParam["debug"];
        }
      },
    );
  }

  form = new FormGroup({
    fullName: new FormGroup({
      surname: new FormControl(this._student?.surname, [Validators.required, Validators.minLength(2), Validators.pattern("^[A-Za-zА-Яа-яЁё]+$")]),
      name: new FormControl(this._student?.name, [Validators.required, Validators.minLength(2), Validators.pattern("^[A-Za-zА-Яа-яЁё]+$")]),
      middleName: new FormControl(this._student?.middleName, [Validators.required, Validators.minLength(2), Validators.pattern("^[A-Za-zА-Яа-яЁё]+$")]),
    }, { validators: nameValidator }),
    date: new FormControl(this._student?.dateOfBirth, [Validators.required, dateValidator]),
    score: new FormControl(this._student?.score, [Validators.required, Validators.min(0), Validators.max(5)])
  });

  getErrorText(controlName: string): string {
    const control = this.form.get(controlName);
    if (control && control.invalid) {
      let errorsText: string;
      if (control.errors?.required) {
        errorsText = "Обязательное поле";
      }
      if (control.errors?.minlength) {
        errorsText = `Введите еще ${control.errors?.minlength.requiredLength - control.errors?.minlength.actualLength} символ`;
      }
      if (control.errors?.min) {
        errorsText = `Минимальное значение ${control.errors?.min.min}`;
      }
      if (control.errors?.max) {
        errorsText = `Максимальное значение ${control.errors?.max.max}`;
      }
      if (control.errors?.pattern) {
        errorsText = `Поле может содерать только буквы`;
      }
      if (control.errors?.fullNameMatch) {
        errorsText = `Имя не должно совпадать с фамилией и отчеством`;
      }
      if (control.errors?.surnameMatch) {
        errorsText = `Имя не должно совпадать с фамилией`;
      }
      if (control.errors?.middleNameMatch) {
        errorsText = `Имя не должно совпадать с отчеством`;
      }
      if (control.errors?.dateMatch) {
        errorsText = `Дата рождения должна быть не более ${control.errors?.dateMatch.requiredDate}`;
      }
      if (control.errors?.dateRequired) {
        errorsText = "Обязательное поле";
      }
      return errorsText;
    }
    return "";
  }

  get fullName(): AbstractControl {
    return this.form.get("fullName");
  }

  get name(): AbstractControl {
    return this.form.get("fullName.name");
  }

  get surname(): AbstractControl {
    return this.form.get("fullName.surname");
  }

  get middleName(): AbstractControl {
    return this.form.get("fullName.middleName");
  }

  get date(): AbstractControl {
    return this.form.get("date");
  }

  get score(): AbstractControl {
    return this.form.get("score");
  }

  checkValidity(control: AbstractControl): boolean {
    return control.invalid && (control.dirty || control.touched);
  }

  checkMiddleNameInput(): boolean {
    return (this.name.dirty || this.name.touched) && (this.middleName.dirty || this.middleName.touched) && this.name.value === this.middleName.value;
  }

  checkSurnameInput(): boolean {
    return (this.name.dirty || this.name.touched) && (this.surname.dirty || this.surname.touched) && this.name.value === this.surname.value;
  }

  getDate(d: Date): string {
    const time: string[] = [];
    const year: string = String(d.getFullYear());
    const month: string = "0" + (d.getMonth() + 1);
    const day: string = "0" + d.getDate();
    time.push(year);
    time.push(month.slice(-2));
    time.push(day.slice(-2));

    return time.join("-");
  }

  ngAfterContentChecked (): void {
    if (this.id !== null && !this.formFull) {
      this.formFull = true;
      this.studentSubscription = this.studentsService.getById(this.id).subscribe(
        (data: Student) => {
          this._student = data;
          if (this._student) {
            this.form.setValue({
              fullName: {
                name: this._student.name,
                surname: this._student.surname,
                middleName: this._student.middleName,
              },
              date: this.getDate(this._student.dateOfBirth),
              score: this._student.score,
            });
            this.cdr.detectChanges();
          }
        },
      );
    }
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.id = null;
    this._student = null;
    this.routeSubscription.unsubscribe();
    this.querySubscription.unsubscribe();
    if (this.studentSubscription) {
      this.studentSubscription.unsubscribe();
    }
  }

  onSubmit(): void {
    if (this.form.valid) {
      const student: Student = {
        dateOfBirth: new Date(this.form.value.date),
        middleName: this.form.value.fullName.middleName,
        name: this.form.value.fullName.name,
        score: this.form.value.score,
        surname: this.form.value.fullName.surname,
      };
      if (this.id === null) {
        this.studentsService.create(student).subscribe(
          (data: Student) => {
            const receivedStudent = data;
            this.studentsService.students.splice(this.studentsService.students.length, 0, receivedStudent);
            this.studentsService.loadedStudents.splice(this.studentsService.loadedStudents.length, 0, receivedStudent);
            this.form.reset();
            this.changeRoute([""]);
          });
      } else {
        const editableStudent = this.studentsService.students.find((s) => s.id === this.id);
        this.studentsService.update(student, this.id).subscribe(
          (data: Student) => {
            const receivedStudent = data;
            const index = this.studentsService.students.indexOf(editableStudent);
            this.studentsService.students.splice(index, 1, receivedStudent);
            const indexLoaded = this.studentsService.loadedStudents.indexOf(editableStudent);
            this.studentsService.loadedStudents.splice(indexLoaded, 1, receivedStudent);
            this._student = null;
            this.form.reset();
            this.changeRoute([""]);
          });
      }
    } else {
      this.form.markAllAsTouched();
    }
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

  cancelEdit(): void {
    this.id = null;
    this._student = null;
    this.form.reset();
    this.changeRoute([""]);
  }
}


