import errorImage from '../../../static/images/error.svg';

export const errorTypes = {
    500: {
        errorContext: {
            error: 500,
            description: 'скоро все будет хорошо',
            link: '/',
            linkName: 'вернуться',
            errorImage: errorImage,
        }
    },
    404: {
        errorContext: {
            error: 404,
            description: 'че тут происходит?!',
            link: '/',
            linkName: 'вернуться',
            errorImage: errorImage,
        }
    }
}