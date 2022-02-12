import './message-input.style.scss';
import template from './message-input.template.hbs';
import { BaseBlock } from '../../core/base-block';
import { EventProps } from '../../modules/form/form.component';

export interface MessageInputProps {
    events?: EventProps;
}

export class MessageInputComponent extends BaseBlock<MessageInputProps> {
  constructor() {
    super({
      events: {
        input: (event: InputEvent) => {
          const { target } = event;
          const submitButton: HTMLInputElement | null = document.querySelector('[type="submit"]');

          if (target && submitButton) {
            if ((target as HTMLInputElement)?.value) {
              submitButton.classList.remove('disable');
            } else {
              submitButton.classList.add('disable');
            }
          }
        },
        submit: (event: SubmitEvent) => {
          event.preventDefault();

          const inputField: HTMLInputElement | null = document.querySelector('.message-input__input');

          if (inputField?.value) {
            event.submitter?.classList.add('disable');

            console.log({ message: inputField.value });
            inputField.value = '';
          }
        },
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
