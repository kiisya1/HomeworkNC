import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from "@angular/core";

import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";
import { Student } from "../student";
import { dateValidator } from "./date-validator";
import { nameValidator } from "./fullname-validator";

@Component({
  selector: "add-form",
  templateUrl: "./add-form.component.html",
  styleUrls: ["./add-form.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddFormComponent implements OnChanges, OnInit {
  _student: Student | null = null;

  @Input() set student(value: Student) {
    this._student = value;
  }
  @Input() isPoorVision: boolean;

  @Output() saveStudent = new EventEmitter<Student>();
  @Output() cancelEditStudent = new EventEmitter();

  form = new FormGroup({
    fullName: new FormGroup({
      surname: new FormControl(this.student?.surname, [Validators.required, Validators.minLength(2), Validators.pattern("^[A-Za-zА-Яа-яЁё]+$")]),
      name: new FormControl(this.student?.name, [Validators.required, Validators.minLength(2), Validators.pattern("^[A-Za-zА-Яа-яЁё]+$")]),
      middleName: new FormControl(this.student?.middleName, [Validators.required, Validators.minLength(2), Validators.pattern("^[A-Za-zА-Яа-яЁё]+$")]),
    }, { validators: nameValidator }),
    date: new FormControl(this.student?.dateOfBirth, [Validators.required, dateValidator]),
    score: new FormControl(this.student?.score, [Validators.required, Validators.min(0), Validators.max(5)])
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

  ngOnChanges(changes: SimpleChanges): void {
    if (this._student === null) {
      this.form.reset();
    }
    if (this._student !== null) {
      this.form.setValue({
        fullName: {
          name: this._student.name,
          surname: this._student.surname,
          middleName: this._student.middleName,
        },
        date: this.getDate(this._student.dateOfBirth),
        score: this._student.score,
      });
    }
  }

  ngOnInit(): void {
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
      this.saveStudent.emit(student);
      if (this._student !== null) {
        this._student = null;
      }
      this.form.reset();
    } else {
      this.form.markAllAsTouched();
    }
  }

  cancelEdit(): void {
    this.cancelEditStudent.emit();
    this._student = null;
    this.form.reset();
  }
}


