import './message.style.scss';
import template from './message.template.hbs';
import { BaseBlock } from '../../core/base-block';

export interface MessageProps {
    text: string;
    timeStamp: string;
    isIncoming: boolean;
}

export class MessageComponent extends BaseBlock<MessageProps> {
  render() {
    return this.compile(template, this.props);
  }
}
