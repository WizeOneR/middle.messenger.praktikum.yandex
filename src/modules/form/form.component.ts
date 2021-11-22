import './form.style.scss';
import '../../components/button/button.component';
import '../../components/input/input.component';
import template from './form.template.hbs';
import {BaseBlock} from '../../core/base-block';
import {InputComponent} from '../../components/input/input.component';
import {ButtonComponent} from '../../components/button/button.component';

export interface FormProps {
    events?: EventProps;
    title?: string;
    inputs?: {input: InputComponent}[];
    buttons?: {button: ButtonComponent}[];
    links?: Link[];
}

export interface EventProps {
    [key: string]: (a: Event) => void;
}

export interface Link {
    url: string;
    linkName: string;
}

export class FormComponent extends BaseBlock<FormProps> {
    render() {
        return this.compile(template, this.props);
    }
}
