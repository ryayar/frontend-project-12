export const routes = {
  chat: '/',
  login: '/login',
  signup: '/signup',
  error: '*',
};

export const serverPath = '/api/v1';

export const paths = {
  signup: () => [serverPath, 'signup'].join('/'),
  login: () => [serverPath, 'login'].join('/'),
  channels: () => [serverPath, 'channels'].join('/'),
  messages: () => [serverPath, 'messages'].join('/'),
};
