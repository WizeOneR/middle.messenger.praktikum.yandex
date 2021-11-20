import '../../modules/form/form';
import template from './auth.hbs';
import {authTypes} from "./const";

export function renderAuthForm(authType) {
    return template(authTypes[authType]);
}
