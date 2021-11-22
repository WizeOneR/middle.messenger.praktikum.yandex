import './user-image.style.scss';
import template from './user-image.template.hbs';
import {BaseBlock} from '../../core/base-block';

export interface UserImageProps {
    avatar?: string;
    avatarSize?: string;
    userName?: string;
}

export class UserImageComponent extends BaseBlock<UserImageProps> {
    render() {
        return this.compile(template, this.props);
    }
}
