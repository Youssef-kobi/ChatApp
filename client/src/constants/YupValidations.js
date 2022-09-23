import * as yup from 'yup'

export const loginSchema = yup.object().shape({
  // username: yup.string().min(8).max(32).required().label('Username'),
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
          : yup.string().min(6).max(32).isValidSync(value)
      }
      return true
    }),
  password: yup.string().min(8).max(32).required().label('Password'),
})

export const registerSchema = yup.object().shape({
  email: yup.string().email().min(8).max(32).required().label('Email'),
  username: yup.string().min(8).max(32).required().label('Username'),
  password: yup.string().min(8).max(32).required().label('Password'),
})

export const resetPasswordSchema = yup.object().shape({
  email: yup.string().email().min(8).max(32).required().label('Email'),
})

export const searchSchema = yup.object().shape({
  search: yup.string().min(3).max(32).label('search'),
})

export const messageSchema = yup.object().shape({
  search: yup.string().min(1).max(200).label('Message'),
})
