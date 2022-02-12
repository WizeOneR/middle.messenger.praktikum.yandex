import './button.style.scss';
import template from './button.template.hbs';
import { BaseBlock } from '../../core/base-block';
import { EventProps } from '../../modules/form/form.component';

export interface ButtonProps {
    type: string;
    name: string;
    disabled: string;
    events?: EventProps;
}

export class ButtonComponent extends BaseBlock<ButtonProps> {
  render() {
    return this.compile(template, this.props);
  }
}
