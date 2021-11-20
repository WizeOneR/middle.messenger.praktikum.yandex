import '../../modules/form/form';
import './main.scss'
import template from './main.hbs';
import {mainFormLinks} from './const';

export function renderMainForm() {
    return template(mainFormLinks);
}