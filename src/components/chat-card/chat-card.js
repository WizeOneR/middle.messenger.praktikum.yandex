import './chat-card.scss';
import '../user-image/user-image'
import template from './chat-card.hbs';
import Handlebars from 'handlebars/dist/handlebars.runtime';

Handlebars.registerPartial('chatCard', template);