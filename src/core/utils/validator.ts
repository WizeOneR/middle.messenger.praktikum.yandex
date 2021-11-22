export interface ValidatorResult {
    message: string;
}

export class Validator {
  static createError(target: HTMLInputElement, validMessage: string) {
    if (validMessage) {
      target.classList.add('invalid');

      if (
        target.nextElementSibling === null
                || target.nextElementSibling.tagName !== 'DIV'
      ) {
        target.setAttribute('invalid', 'true');
        const element = this.createErrorElement(validMessage);
        target.after(element);
      }
    }

    if (
      target.nextElementSibling !== null
            && target.nextElementSibling.tagName === 'DIV'
            && !validMessage
    ) {
      target.classList.remove('invalid');
      target.nextElementSibling.remove();
    }
  }

  static createErrorElement(message: string): HTMLElement {
    const errorElement = document.createElement('div');

    errorElement.classList.add('input__error-label');
    errorElement.textContent = message;

    return errorElement;
  }

  static passwordValidator(input: HTMLInputElement): ValidatorResult | null {
    const regex = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,40}$/);

    return regex.test(input.value)
      ? null
      : { message: 'Введеный пароль не удовлетворяет требованиям' };
  }

  static emailValidator(input: HTMLInputElement): ValidatorResult | null {
    const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

    return regex.test(input.value)
      ? null
      : { message: 'Некорректный адрес электронной почты' };
  }

  static phoneValidator(input: HTMLInputElement): ValidatorResult | null {
    const regex = new RegExp(
      /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{2})[-. ]*(\d{2})(?: *x(\d+))?\s*$/,
    );

    return regex.test(input.value) ? null : { message: 'Некорректный номер телефона' };
  }

  static loginValidator(input: HTMLInputElement): ValidatorResult | null {
    const regex = new RegExp(/^(?=[\S]+)(?=.*[^0-9 ].*)[a-zA-Z0-9_-]{3,20}$/);

    return regex.test(input.value) ? null : { message: 'Поле не должно быть пустым' };
  }

  static nameValidator(input: HTMLInputElement): ValidatorResult | null {
    const regex = new RegExp(/^[A-ZА-Я][A-Za-zА-Яа-я\\-]+$/);

    return regex.test(input.value) ? null : { message: 'Поле не должно быть пустым' };
  }
}
