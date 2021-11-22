import './error-form.style.scss';
import template from './error-form.template.hbs';
import { BaseBlock } from '../../core/base-block';

export interface ErrorFormProps {
    error: number;
    description: string;
    link: string;
    linkName: string;
    errorImage: string;
}

export class ErrorForm extends BaseBlock<ErrorFormProps> {
  render() {
    return this.compile(template, this.props);
  }
}
