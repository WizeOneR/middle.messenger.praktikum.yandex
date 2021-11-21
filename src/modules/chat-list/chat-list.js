import './chat-list.scss'
import './../../components/chat-card/chat-card'
import './../../components/search-input/search-input'
import template from './chat-list.hbs';
import Handlebars from 'handlebars/dist/handlebars.runtime';

Handlebars.registerPartial('chatList', template);