import './chat-card.style.scss';
import '../user-image/user-image.component';
import template from './chat-card.template.hbs';
import {BaseBlock} from '../../core/base-block';
import {UserImageComponent} from '../user-image/user-image.component';

export interface ChatCarsProps {
    userName: string;
    message: string;
    unreadCount: number;
    avatar: UserImageComponent;
}

export class ChatCardComponent extends BaseBlock<ChatCarsProps> {
    render() {
        return this.compile(template, this.props);
    }
}
