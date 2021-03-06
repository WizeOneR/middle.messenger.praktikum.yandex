import './message-list.style.scss';
import { MessageInputComponent } from '../../components/message-input/message-input.component';
import { MessageComponent } from '../../components/message/message.component';
import template from './message-list.template.hbs';
import { BaseBlock } from '../../core/base-block';

export interface MessageListProps {
    messageInput: MessageInputComponent;
    messages: {message: MessageComponent}[];
}

export class MessageListComponent extends BaseBlock<MessageListProps> {
  render() {
    return this.compile(template, this.props);
  }
}
