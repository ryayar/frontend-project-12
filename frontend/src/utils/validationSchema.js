import * as Yup from 'yup';

export const getNewChannelSchema = (t, channelsNames) => (
  Yup.object().shape({
    newChannelName: Yup.string()
      .min(3, t('validationSchema.channelLength'))
      .max(20, t('validationSchema.channelLength'))
      .required(t('validationSchema.required'))
      .notOneOf(channelsNames, t('validationSchema.channelExist')),
  })
);

export const getNewUserSchema = (t) => (
  Yup.object().shape({
    username: Yup.string()
      .min(3, t('validationSchema.usernameLength'))
      .max(20, t('validationSchema.usernameLength'))
      .required(t('validationSchema.required')),

    password: Yup.string()
      .min(6, t('validationSchema.passwordLength'))
      .required(t('validationSchema.required')),

    confirmPassword: Yup.string()
      .required(t('validationSchema.required'))
      .oneOf([Yup.ref('password')], t('validationSchema.passwordsMatch')),
  })
);
