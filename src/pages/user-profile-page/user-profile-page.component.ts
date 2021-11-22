import './user-profile-page.style.scss';
import '../../components/button/button.component';
import { InputComponent } from '../../components/input/input.component';
import template from './user-profile-page.template.hbs';
import { UserImageComponent } from '../../components/user-image/user-image.component';
import avatar from '../../../static/images/user_image.jpg';
import { BaseBlock } from '../../core/base-block';

export default class UserProfilePageComponent extends BaseBlock {
  constructor(props: any) {
    super({
      ...props,

      userImage: new UserImageComponent({
        avatar,
        avatarSize: 'user-image--large',
      }),
      mailInput: new InputComponent({
        label: 'Почта',
        name: 'mail',
        type: 'text',
        defaultValue: 'blinov@blinov.ru',
        disable: 'disabled',
      }),
      loginInput: new InputComponent({
        label: 'Логин',
        name: 'login',
        type: 'text',
        defaultValue: 'blinovaa',
        disable: 'disabled',
      }),
      firstNameInput: new InputComponent({
        label: 'Имя',
        name: 'first_name',
        type: 'text',
        defaultValue: 'Александр',
        disable: 'disabled',
      }),
      secondNameInput: new InputComponent({
        label: 'Фамилия',
        name: 'second_name',
        type: 'text',
        defaultValue: 'Блинов',
        disable: 'disabled',
      }),
      nameInput: new InputComponent({
        label: 'Имя в чате',
        name: 'display_name',
        type: 'text',
        defaultValue: 'Александр Блинов',
        disable: 'disabled',
      }),
      phoneInput: new InputComponent({
        label: 'Телефон',
        name: 'phone',
        type: 'tel',
        defaultValue: '+79828289466',
        disabled: 'disabled',
      }),
    });
  }

  render(): any {
    return this.compile(template, this.props);
  }
}
