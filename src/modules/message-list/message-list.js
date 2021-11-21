import './message-list.scss';
import '../../components/message-input/message-input'
import '../../components/message/message'
import template from './message-list.hbs';
import Handlebars from 'handlebars/dist/handlebars.runtime';

Handlebars.registerPartial('messageList', template);