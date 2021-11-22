import '../../components/error-form/error-form.component';
import errorTemplate from './error-page.template.hbs';
import {BaseBlock} from '../../core/base-block';

export class ErrorPageComponent extends BaseBlock {
    render() {
        return this.compile(errorTemplate, {error: this.props.error});
    }
}
