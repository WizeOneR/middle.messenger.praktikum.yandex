export const authTypes = {
    auth: {
        formContext: {
            title: 'Авторизация',
            inputs: [
                {
                    inputContext: {
                        label: 'Логин',
                        name: 'login',
                        type: 'text',
                    },
                },
                {
                    inputContext: {
                        label: 'Пароль',
                        name: 'password',
                        type: 'password',
                    },
                }
            ],
            buttons: [
                {
                    buttonContext: {
                        type: 'submit',
                        name: 'Войти'
                    }
                }
            ],
            links: [
                {
                    url: '/registration',
                    linkName: 'Зарегистрироваться',
                },
            ]
        }
    },
    registration: {
        formContext: {
            title: 'Регистрация',
            inputs: [
                {
                    inputContext: {
                        label: 'Почта',
                        name: 'mail',
                        type: 'email',
                    },
                },
                {
                    inputContext: {
                        label: 'Логин',
                        name: 'text',
                        type: 'text',
                    },
                },
                {
                    inputContext: {
                        label: 'Имя',
                        name: 'first_name',
                        type: 'text',
                    },
                },
                {
                    inputContext: {
                        label: 'Фамилия',
                        name: 'second_name',
                        type: 'text',
                    },
                },
                {
                    inputContext: {
                        label: 'Телефон',
                        name: 'phone',
                        type: 'tel',
                    },
                },
                {
                    inputContext: {
                        label: 'Пароль',
                        name: 'password',
                        type: 'password',
                    },
                },
                {
                    inputContext: {
                        label: 'Пароль (еще раз)',
                        name: 'password',
                        type: 'password',
                    },
                },
            ],
            buttons: [
                {
                    buttonContext: {
                        type: 'submit',
                        name: 'Зарегистрироваться'
                    }
                }
            ],
            links: [
                {
                    url: '/auth',
                    linkName: 'Войти',
                },
            ]
        }
    }
};