import { EventProps, FormComponent } from '../../modules/form/form.component';
import template from './auth.template.hbs';
import { BaseBlock } from '../../core/base-block';

export interface AuthProps {
  form: FormComponent;
  events?: EventProps;
}

export class AuthComponent extends BaseBlock<AuthProps> {
  render(): any {
    return this.compile(template, this.props);
  }
}
