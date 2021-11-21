import './user-profile.scss';
import '../../components/button/button';
import '../../components/input/input';
import template from './user-profile.hbs';
import {userProfileFormData} from './const';


export function renderUserProfileForm() {
    return template(userProfileFormData);
}