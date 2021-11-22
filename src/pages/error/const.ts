import errorImage from '../../../static/images/error.svg';

export const errorTypes: {[key: number]: any} = {
  500: {
    error: 500,
    description: 'скоро все будет хорошо',
    link: '/',
    linkName: 'вернуться',
    errorImage,
  },
  404: {
    error: 404,
    description: 'че тут происходит?!',
    link: '/',
    linkName: 'вернуться',
    errorImage,
  },
};
