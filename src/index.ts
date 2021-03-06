import './styles/style.scss';
import 'normalize.css';
import { render } from './core/utils/renderDOM';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ErrorPageComponent } from './pages/error/error-page.component';
import { ErrorForm } from './components/error-form/error-form.component';
import { errorTypes } from './pages/error/const';
import { FormComponent } from './modules/form/form.component';
import { AuthComponent } from './pages/auth/auth.component';
import { UserProfilePageComponent } from './pages/user-profile-page/user-profile-page.component';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { ChatPageComponent } from './pages/chat/chat-page.component';
import { Validator } from './core/utils/validator';

const path = window.location.pathname;
const rootSelector = '.root';

switch (path) {
  case '/':
    renderMainPage();
    break;
  case '/chat':
    renderChatPage();
    break;
  case '/user-profile':
    renderUserProfile();
    break;
  case '/auth':
    renderAuthPage();
    break;
  case '/registration':
    renderRegistrationPage();
    break;
  case '/500':
    renderErrorPage(500);
    break;
  default:
    renderErrorPage(404);
    break;
}

function renderErrorPage(errorType: number) {
  render(
    rootSelector,
    new ErrorPageComponent({ error: new ErrorForm(errorTypes[errorType]) }),
  );
}

function renderMainPage() {
  render(
    rootSelector,
    new MainPageComponent(),
  );
}

function renderChatPage() {
  render(rootSelector, new ChatPageComponent());
}

function renderUserProfile() {
  render(rootSelector, new UserProfilePageComponent({}));
}

function renderAuthPage() {
  render(
    rootSelector,
    new AuthComponent({
      form: new FormComponent({
        events: {
          submit: (event) => {
            event.preventDefault();

            const data: Record<string, string> = {};

            const inputFields = document.querySelectorAll('input');

            inputFields.forEach((input: HTMLInputElement) => {
              data[input.name] = input.value;
            });

            console.log(data);
          },
        },
        title: '??????????????????????',
        inputs: [
          {
            input: new InputComponent(
              {
                label: '??????????',
                name: 'login',
                type: 'text',
              },
              [Validator.loginValidator],
            ),
          },
          {
            input: new InputComponent(
              {
                label: '????????????',
                name: 'password',
                type: 'password',
              },
              [Validator.passwordValidator],
            ),
          },
        ],
        buttons: [
          {
            button: new ButtonComponent({
              type: 'submit',
              name: '??????????',
              disabled: 'disabled',
            }),
          },
        ],
        links: [
          {
            url: '/registration',
            linkName: '????????????????????????????????????',
          },
        ],
      }),
    }),
  );
}

function renderRegistrationPage() {
  render(
    rootSelector,
    new AuthComponent({
      form: new FormComponent({
        title: '??????????????????????',
        events: {
          submit: (event) => {
            event.preventDefault();

            const data: Record<string, string> = {};

            const inputFields = document.querySelectorAll('input');

            inputFields.forEach((input: HTMLInputElement) => {
              data[input.name] = input.value;
            });

            console.log(data);
          },
        },
        inputs: [
          {
            input: new InputComponent(
              {
                label: '??????????',
                name: 'mail',
                type: 'email',
              },
              [Validator.emailValidator],
            ),
          },
          {
            input: new InputComponent(
              {
                label: '??????????',
                name: 'text',
                type: 'text',
              },
              [Validator.loginValidator],
            ),
          },
          {
            input: new InputComponent(
              {
                label: '??????',
                name: 'first_name',
                type: 'text',
              },
              [Validator.nameValidator],
            ),
          },
          {
            input: new InputComponent(
              {
                label: '??????????????',
                name: 'second_name',
                type: 'text',
              },
              [Validator.nameValidator],
            ),
          },
          {
            input: new InputComponent(
              {
                label: '??????????????',
                name: 'phone',
                type: 'tel',
              },
              [Validator.phoneValidator],
            ),
          },
          {
            input: new InputComponent(
              {
                label: '????????????',
                name: 'password',
                type: 'password',
              },
              [Validator.passwordValidator],
            ),
          },
          {
            input: new InputComponent(
              {
                label: '???????????? (?????? ??????)',
                name: 'password',
                type: 'password',
              },
              [Validator.passwordValidator],
            ),
          },
        ],
        buttons: [
          {
            button: new ButtonComponent({
              type: 'submit',
              name: '????????????????????????????????????',
              disabled: 'disabled',
            }),
          },
        ],
        links: [
          {
            url: '/auth',
            linkName: '??????????',
          },
        ],
      }),
    }),
  );
}
