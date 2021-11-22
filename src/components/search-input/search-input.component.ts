import './search-input.style.scss';
import template from './search-input.template.hbs';
import { BaseBlock } from '../../core/base-block';

export class SearchInputComponent extends BaseBlock {
  render() {
    return this.compile(template, this.props);
  }
}
