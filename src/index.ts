import './styles/style.scss';
import 'normalize.css';
import {render} from './core/utils/renderDOM';
import MainPageComponent from './pages/main-page/main-page.component';
import {ErrorPageComponent} from './pages/error/error-page.component';
import {ErrorForm} from './components/error-form/error-form.component';
import {errorTypes} from './pages/error/const';
import {FormComponent} from './modules/form/form.component';
import {AuthComponent} from './pages/auth/auth.component';
import {UserProfilePageComponent} from './pages/user-profile-page/user-profile-page.component';
import {userProfileFormData} from './pages/user-profile-page/const';
import {InputComponent} from './components/input/input.component';
import {ButtonComponent} from './components/button/button.component';
import {mainFormLinks} from './pages/main-page/const';
import {ChatPageComponent} from './pages/chat/chat-page.component';
import {Validator} from './core/utils/validator';

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
        new ErrorPageComponent({error: new ErrorForm(errorTypes[errorType])}),
    );
}

function renderMainPage() {
    render(
        rootSelector,
        new MainPageComponent({
            form: new FormComponent(mainFormLinks),
        }),
    );
}

function renderChatPage() {
    render(rootSelector, new ChatPageComponent());
}

function renderUserProfile() {
    render(rootSelector, new UserProfilePageComponent(userProfileFormData));
}

function renderAuthPage() {
    render(
        rootSelector,
        new AuthComponent({
            form: new FormComponent({
                events: {
                    submit: event => {
                        event.preventDefault();

                        const data: Record<string, string> = {};

                        const inputFields = document.querySelectorAll('input');

                        inputFields.forEach((input: HTMLInputElement) => {
                            data[input.name] = input.value;
                        });

                        console.log(data);
                    },
                },
                title: 'Авторизация',
                inputs: [
                    {
                        input: new InputComponent(
                            {
                                label: 'Логин',
                                name: 'login',
                                type: 'text',
                            },
                            [Validator.loginValidator],
                        ),
                    },
                    {
                        input: new InputComponent(
                            {
                                label: 'Пароль',
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
                            name: 'Войти',
                            disabled: 'disabled',
                        }),
                    },
                ],
                links: [
                    {
                        url: '/registration',
                        linkName: 'Зарегистрироваться',
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
                title: 'Регистрация',
                events: {
                    submit: event => {
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
                                label: 'Почта',
                                name: 'mail',
                                type: 'email',
                            },
                            [Validator.emailValidator],
                        ),
                    },
                    {
                        input: new InputComponent(
                            {
                                label: 'Логин',
                                name: 'text',
                                type: 'text',
                            },
                            [Validator.loginValidator],
                        ),
                    },
                    {
                        input: new InputComponent(
                            {
                                label: 'Имя',
                                name: 'first_name',
                                type: 'text',
                            },
                            [Validator.nameValidator],
                        ),
                    },
                    {
                        input: new InputComponent(
                            {
                                label: 'Фамилия',
                                name: 'second_name',
                                type: 'text',
                            },
                            [Validator.nameValidator],
                        ),
                    },
                    {
                        input: new InputComponent(
                            {
                                label: 'Телефон',
                                name: 'phone',
                                type: 'tel',
                            },
                            [Validator.phoneValidator],
                        ),
                    },
                    {
                        input: new InputComponent(
                            {
                                label: 'Пароль',
                                name: 'password',
                                type: 'password',
                            },
                            [Validator.passwordValidator],
                        ),
                    },
                    {
                        input: new InputComponent(
                            {
                                label: 'Пароль (еще раз)',
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
                            name: 'Зарегистрироваться',
                            disabled: 'disabled',
                        }),
                    },
                ],
                links: [
                    {
                        url: '/auth',
                        linkName: 'Войти',
                    },
                ],
            }),
        }),
    );
}
