import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const nameValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const name: AbstractControl = control.get("name");
  const surname: AbstractControl = control.get("surname");
  const middleName: AbstractControl = control.get("middleName");
  if (name && surname && middleName && (name.dirty || name.touched) && (surname.dirty || surname.touched) && (middleName.dirty || middleName.touched) && name.value === surname.value && name.value === middleName.value) {
    return { fullNameMatch: true };
  }

  if (name && surname && (name.dirty || name.touched) && (surname.dirty || surname.touched) && name.value === surname.value) {
    return { surnameMatch: true };
  }

  if (name && middleName && (name.dirty || name.touched) && (middleName.dirty || middleName.touched) && name.value === middleName.value) {
    return { middleNameMatch: true };
  }
  return null;
};
