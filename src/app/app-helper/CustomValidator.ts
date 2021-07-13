import { AbstractControl, ValidatorFn } from "@angular/forms";

export const EmailValidator = (): ValidatorFn => {
  return (control: AbstractControl): { [key: string]: string } => {
    const result = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(control.value);
    return result == true ? null : { "error": "This is invalid email address" };
  };
}

export const DateTimeValidator = (): ValidatorFn => {
  return (control: AbstractControl): { [key: string]: string } => {
    const result = /^(0?[1-9]|[12][0-9]|3[01])([ \/\-])(0?[1-9]|1[012])\2([0-9][0-9][0-9][0-9])(([ -])([0-1]?[0-9]|2[0-3]):[0-5][0-9])?$/.test(control.value);
    return result == true ? null : { "error": "This is not date time" };
  };
}

export const NumberValidator = (): ValidatorFn => {
  return (control: AbstractControl): { [key: string]: string } => {
    const result = /^-?\d*\.?\d+$/.test(control.value);
    return result == true ? null : { "error": "This is not number" };
  };
}

export const PositiveNumberValidator = (): ValidatorFn => {
  return (control: AbstractControl): { [key: string]: string } => {
    const result = /^\d*\.?\d+$/.test(control.value);
    return result == true ? null : { "error": "This is not positive number" };
  };
}

export const NegativeNumberValidator = (): ValidatorFn => {
  return (control: AbstractControl): { [key: string]: string } => {
    const result = /^-\d*\.?\d+$/.test(control.value);
    return result == true ? null : { "error": "This is not negative number" };
  };
}
