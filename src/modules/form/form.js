import './form.scss';
import '../../components/button/button';
import '../../components/input/input';
import template from './form.hbs';
import Handlebars from 'handlebars/dist/handlebars.runtime';

Handlebars.registerPartial('form', template);