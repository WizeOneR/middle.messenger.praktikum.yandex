import './chat-page.style.scss';
import { SidebarComponent } from '../../modules/sidebar/sidebar.component';
import { ChatListComponent } from '../../modules/chat-list/chat-list.component';
import { MessageListComponent } from '../../modules/message-list/message-list.component';
import template from './chat-page.template.hbs';
import { BaseBlock } from '../../core/base-block';

import { UserImageComponent } from '../../components/user-image/user-image.component';
import avatar from '../../../static/images/user_image.jpg';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { MessageInputComponent } from '../../components/message-input/message-input.component';
import { MessageComponent } from '../../components/message/message.component';
import { ChatCardComponent } from '../../components/chat-card/chat-card.component';

export const chatPageProps = {
  sidebar: new SidebarComponent({
    userImage: new UserImageComponent({
      avatar,
    }),
  }),
  chatList: new ChatListComponent({
    searchInput: new SearchInputComponent({}),
    chatCards: [
      {
        chatCard: new ChatCardComponent({
          userName: 'Тестович',
          message: 'Lorem ipsum dolor sit amet...',
          unreadCount: 1,
          avatar: new UserImageComponent({
            avatar,
            avatarSize: 'user-image--medium',
          }),
        }),
      },
      {
        chatCard: new ChatCardComponent({
          userName: 'Тестович',
          message: 'Lorem ipsum dolor sit amet...',
          unreadCount: 1,
          avatar: new UserImageComponent({
            avatar,
            avatarSize: 'user-image--medium',
          }),
        }),
      },
      {
        chatCard: new ChatCardComponent({
          userName: 'Тестович',
          message: 'Lorem ipsum dolor sit amet...',
          unreadCount: 1,
          avatar: new UserImageComponent({
            userName: 'Тестович',
            avatar: '',
            avatarSize: 'user-image--medium',
          }),
        }),
      },
    ],
  }),
  messageList: new MessageListComponent({
    messageInput: new MessageInputComponent(),
    messages: [
      {
        message: new MessageComponent({
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          timeStamp: '20:22',
          isIncoming: false,
        }),
      },
      {
        message: new MessageComponent({
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          timeStamp: '20:22',
          isIncoming: false,
        }),
      },
      {
        message: new MessageComponent({
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          timeStamp: '20:22',
          isIncoming: false,
        }),
      },
      {
        message: new MessageComponent({
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          timeStamp: '20:22',
          isIncoming: false,
        }),
      },
      {
        message: new MessageComponent({
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          timeStamp: '20:22',
          isIncoming: true,
        }),
      },
    ],
  }),
};

export interface ChatPageProps {
    sidebar: SidebarComponent;
    chatList: ChatListComponent;
    messageList: MessageListComponent;
}

export class ChatPageComponent extends BaseBlock<ChatPageProps> {
  constructor() {
    super(chatPageProps);
  }

  render(): any {
    return this.compile(template, this.props);
  }
}
