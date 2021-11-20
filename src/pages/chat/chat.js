import './chat.scss'
import './../../modules/sidebar/sidebar'
import './../../modules/chat-list/chat-list'
import './../../modules/message-list/message-list'
import avatar from './../../../static/images/user_image.jpg';
import template from './chat.hbs';
import {chats, messages} from "./const"

const data = {
    sidebarContext: {
        avatar,
    },
    messageListContext: {
        messages,
    },
    chatCards: chats
}

export function renderChat() {
    return template(data);
}