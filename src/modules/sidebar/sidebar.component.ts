import './sidebar.style.scss';
import template from './sidebar.template.hbs';
import {BaseBlock} from '../../core/base-block';
import {UserImageComponent} from '../../components/user-image/user-image.component';

export class SidebarComponent extends BaseBlock<{userImage: UserImageComponent}> {
    render() {
        return this.compile(template, this.props);
    }
}
