import avatar from "../../../static/images/user_image.jpg";

export const userProfileFormData = {
    avatar,
    avatarSize: 'large',
    userFullName: 'Александр Блинов',
    inputs: [
        {
            inputContext: {
                label: 'Почта',
                name: 'mail',
                type: 'text',
                defaultValue: 'blinov@blinov.ru',
                disable: 'disabled'
            },
        },
        {
            inputContext: {
                label: 'Логин',
                name: 'login',
                type: 'text',
                defaultValue: 'blinovaa',
                disable: 'disabled'
            },
        },
        {
            inputContext: {
                label: 'Имя',
                name: 'first_name',
                type: 'text',
                defaultValue: 'Александр',
                disable: 'disabled'
            },
        },
        {
            inputContext: {
                label: 'Фамилия',
                name: 'second_name',
                type: 'text',
                defaultValue: 'Блинов',
                disable: 'disabled'
            },
        },
        {
            inputContext: {
                label: 'Имя в чате',
                name: 'display_name',
                type: 'text',
                defaultValue: 'Александр Блинов',
                disable: 'disabled'
            },
        },
        {
            inputContext: {
                label: 'Телефон',
                name: 'phone',
                type: 'tel',
                defaultValue: '+79828289466',
                disabled: 'disabled'
            },
        },
    ],
    links: [
        {
            url: '#',
            linkName: 'Изменить данные',
        },
        {
            url: '#',
            linkName: 'Изменить пароль',
        },
        {
            url: '/auth',
            linkName: 'Выйти',
            class: 'user-profile__link--red',
        },
    ]
};