import '../../modules/form/form.component';
import './main-page.style.scss';
import template from './main-page.template.hbs';
import { BaseBlock } from '../../core/base-block';

export class MainPageComponent extends BaseBlock {
  render(): any {
    return this.compile(template, this.props);
  }
}
