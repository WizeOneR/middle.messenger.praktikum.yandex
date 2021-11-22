import './chat-list.style.scss';
import '../../components/chat-card/chat-card.component';
import '../../components/search-input/search-input.component';
import template from './chat-list.template.hbs';
import {BaseBlock} from '../../core/base-block';
import {SearchInputComponent} from '../../components/search-input/search-input.component';
import {ChatCardComponent} from '../../components/chat-card/chat-card.component';

export interface ChatListProps {
    searchInput: SearchInputComponent;
    chatCards: {chatCard: ChatCardComponent}[];
}

export class ChatListComponent extends BaseBlock<ChatListProps> {
    render() {
        return this.compile(template, this.props);
    }
}
