export const RegistrationUserSchema = {
    id: '/RegistrationUserSchema',
    type: 'object',
    properties: {
        login: {
            type: 'string',
            maxLength: 45,
            message: {
              maxLength: 'Login length should not be greater than 45 characters',
            }
          },
      first_name: {
        type: 'string',
        maxLength: 50,
        message: {
          maxLength: 'First Name length should not be greater than 50 characters',
        }
      },
      last_name: {
        type: 'string',
        maxLength: 50,
        message: {
          maxLength: 'Last Name length should not be greater than 50 characters',
        }
      },
      email: {
        type: 'string',
        pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        maxLength: 120,
        message: {
          maxLength: 'Email length should not be greater than 120 characters',
          pattern: 'Email format is not valid'
        }
      },
      password: {
        type: 'string',
        maxLength: 25,
        minLength: 5,
        message: {
          maxLength: 'Password length should be greater 5 and less 25 characters',
        }
      },
    },
  }

  export const LoginUserSchema = {
    id: '/LoginUserSchema',
    type: 'object',
    properties: {
      email: {
        type: 'string',
        required: true,
        pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        maxLength: 120,
        message: {
          required: 'Email is required',
          maxLength: 'Email length should not be greater than 120 characters',
          pattern: 'Email format is not valid',
        }
      },
      password: {
        type: 'string',
        required: true,
        minLength: 6,
        message: {
          required: 'Password is required',
          minLength: 'Password length should not be less than 6 characters',
        }
      }
    },
  }