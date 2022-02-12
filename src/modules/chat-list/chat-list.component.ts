import './chat-list.style.scss';
import { ChatCardComponent } from '../../components/chat-card/chat-card.component';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import template from './chat-list.template.hbs';
import { BaseBlock } from '../../core/base-block';

export interface ChatListProps {
    searchInput: SearchInputComponent;
    chatCards: {chatCard: ChatCardComponent}[];
}

export class ChatListComponent extends BaseBlock<ChatListProps> {
  render() {
    return this.compile(template, this.props);
  }
}
