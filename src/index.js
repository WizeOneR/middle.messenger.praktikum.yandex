import './styles/style.scss';

import {renderMainForm} from "./pages/main/main";
import {renderError} from "./pages/error/error";
import {renderAuthForm} from "./pages/auth/auth";
import {renderChat} from "./pages/chat/chat";
import {renderUserProfileForm} from "./pages/user-profile/user-profile";

const root = document.querySelector(".root");
const path = window.location.pathname;

switch (path) {
    case '/':
        root.innerHTML = renderMainForm();
        break;
    case '/chat':
        root.innerHTML = renderChat();
        break;
    case '/user-profile':
        root.innerHTML = renderUserProfileForm();
        break;
    case '/auth':
        root.innerHTML = renderAuthForm('auth');
        break;
    case '/registration':
        root.innerHTML = renderAuthForm('registration');
        break;
    case '/500':
        root.innerHTML = renderError(500);
        break;
    default:
        root.innerHTML = renderError(404);
        break;
}