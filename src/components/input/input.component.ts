import './input.style.scss';
import template from './input.template.hbs';
import { BaseBlock } from '../../core/base-block';
import { Validator } from '../../core/utils/validator';

export interface InputProps {
    label: string;
    name: string;
    type: string;
}

export class InputComponent extends BaseBlock<InputProps> {
  private _validators: any[] = [];

  constructor(props: any, validators: any[] = []) {
    super({ ...props, validators });
    this._validators = validators;
  }

  componentAfterRender() {
    this._element?.firstElementChild?.addEventListener(
      'focus',
      (event: InputEvent) => {
        this.validateInput(event);
      },
    );
    this._element?.firstElementChild?.addEventListener(
      'blur',
      (event: InputEvent) => {
        this.validateInput(event);
      },
    );
    this._element?.firstElementChild?.addEventListener(
      'input',
      (event: InputEvent) => {
        this.validateInput(event);
      },
    );
  }

  render() {
    return this.compile(template, this.props);
  }

  validateInput(event: InputEvent) {
    this._validators.forEach((validator) => {
      const validatorResult = validator(event.target);

      Validator.createError(
                event.target as HTMLInputElement,
                validatorResult?.message,
      );

      const submitButton = document.querySelector(
        '[type="submit"]',
      ) as HTMLButtonElement;
      const inputs = document.querySelectorAll('input');

      let hasValue = true;

      inputs.forEach((input) => {
        if (input.classList.contains('invalid') || !input.value) {
          hasValue = false;
        }
      });

      if (hasValue) {
        if (submitButton.getAttribute('disabled')) {
          submitButton.removeAttribute('disabled');
        }
      } else if (!submitButton.getAttribute('disabled')) {
        submitButton.setAttribute('disabled', 'disabled');
      }
    });
  }
}
