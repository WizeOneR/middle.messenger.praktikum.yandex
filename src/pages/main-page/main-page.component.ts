import { FormComponent } from '../../modules/form/form.component';
import './main-page.style.scss';
import template from './main-page.template.hbs';
import { BaseBlock } from '../../core/base-block';

export class MainPageComponent extends BaseBlock {
  constructor() {
    super(
      {
        form: new FormComponent({
          links: [
            {
              url: 'auth',
              linkName: 'auth',
            },
            {
              url: 'registration',
              linkName: 'registration',
            },
            {
              url: 'chat',
              linkName: 'chat',
            },
            {
              url: '404',
              linkName: '404',
            },
            {
              url: '500',
              linkName: '500',
            },
          ],
        }),
      },
    );
  }

  render(): any {
    return this.compile(template, this.props);
  }
}
