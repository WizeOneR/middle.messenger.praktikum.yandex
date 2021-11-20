import './user-image.scss'
import template from './user-image.hbs';
import Handlebars from 'handlebars/dist/handlebars.runtime';

Handlebars.registerHelper("imageSize", (size) => size ? `user-image--${size}` : '');
Handlebars.registerPartial('userImage', template);