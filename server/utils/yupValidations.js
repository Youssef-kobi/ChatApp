import * as yup from 'yup';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const URL =
  /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g;

export const loginSchema = yup.object().shape({
  username: yup
    .string()
    .required()
    .label('Username')
    .test((value) => {
      if (value) {
        return value.includes('@')
          ? yup
              .string()
              .email()
              .min(8)
              .max(32)
              // .required()
              // .label('Email')
              .isValidSync(value)
          : yup.string().min(8).max(32).isValidSync(value)
      }
      return true
    }),
  password: yup.string().min(8).max(32).required().label('Password'),
});

export const registerSchema = yup.object().shape({
  email: yup.string().email().min(8).max(32).required().label('Email'),

  username: yup.string().min(8).max(32).required().label('Username'),
  password: yup.string().min(8).max(32).required().label('Password'),
});

export const resetPasswordSchema = yup.object().shape({
  email: yup.string().email().min(8).max(32).required().label('Email'),
});
