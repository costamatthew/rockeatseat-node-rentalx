import { Router } from 'express'
import multer from 'multer'

import uploadConfig from '@config/upload'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

import { CreateUserController } from '@modules/accounts/UseCases/CreateUser/CreateUserController'
import { UpdateUserAvatarController } from '@modules/accounts/UseCases/UpdateUserAvatar/UpdateUserAvatarController'

const usersRouters = Router()

const uploadAvatar = multer(uploadConfig)

const createUserController = new CreateUserController()
const updateUserAvatarController = new UpdateUserAvatarController()

usersRouters.post('/', createUserController.handle)

usersRouters.patch(
    '/avatar',
    ensureAuthenticated,
    uploadAvatar.single('avatar'),
    updateUserAvatarController.handle
)

export { usersRouters }
