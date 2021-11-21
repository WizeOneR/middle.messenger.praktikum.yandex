import '../../components/error/error';
import errorTemplate from './error.hbs';
import {errorTypes} from './const';

export function renderError(errorCode) {
    return errorTemplate(errorTypes[errorCode]);
}