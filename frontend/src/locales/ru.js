const ru = {
  modal: {
    addChannel: 'Добавить канал',
    channelName: 'Имя канала',
    cancel: 'Отменить',
    send: 'Отправить',
    deleteChannel: 'Удалить канал',
    areYouSure: 'Уверены?',
    delete: 'Удалить',
    renameChannel: 'Переименовать канал',
    channelAddSuccess: 'Канал создан',
    channelRemoveSuccess: 'Канал удалён',
    channelRenameSuccess: 'Канал переименован',
  },

  navbar: {
    chatName: 'Hexlet Chat',
    exit: 'Выйти',
  },

  chatPage: {
    grid: '#',
    channelManage: 'Управление каналом',
    rename: 'Переименовать',
    delete: 'Удалить',
    chatLoading: 'Загрузка чата',
    channels: 'Каналы',
    send: 'Отправить',
    messagesCount_one: '{{count}} сообщение',
    messagesCount_many: '{{count}} сообщений',
    messagesCount_few: '{{count}} сообщения',
    newMessage: 'Новое сообщение',
    enterMessage: 'Введите сообщение...',
  },

  errorPage: {
    pageNotFound: 'Страница не найдена',
    butYouCanGo: 'Но вы можете перейти',
    toMainPage: 'на главную страницу',
  },

  loginPage: {
    enter: 'Войти',
    yourNick: 'Ваш ник',
    password: 'Пароль',
    authError: 'Ошибка авторизации',
    noAccount: 'Нет аккаунта? ',
    registration: 'Регистрация',
  },

  signupPage: {
    registration: 'Регистрация',
    username: 'Имя пользователя',
    password: 'Пароль',
    confirmPassword: 'Подтвердите пароль',
    signup: 'Зарегистрироваться',
  },

  validationSchema: {
    usernameLength: 'От 3 до 20 символов',
    passwordLength: 'Не менее 6 символов',
    required: 'Обязательное поле',
    passwordsMatch: 'Пароли должны совпадать',
    channelLength: 'От 3 до 20 символов',
    channelExist: 'Канал уже существует',
  },

  errors: {
    networkError: 'Ошибка соединения',
    authError: 'Неверные имя пользователя или пароль',
    signupError: 'Такой пользователь уже существует',
  },
};

export default ru;
