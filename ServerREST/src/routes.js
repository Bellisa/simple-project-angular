import authRouter from './resources/auth/router'
import usersRouter from './resources/users/router'


export const publicRoutes = [authRouter]
export const privateRoutes = [usersRouter]