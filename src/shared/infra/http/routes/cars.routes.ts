import { Router } from 'express'

import { ensureAdmin } from '../middlewares/ensureAdmin'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

import { CreateCarController } from '@modules/cars/useCases/createCar/CreateCarController'
import { ListAvailableCarsController } from '@modules/cars/useCases/listAvaliableCars/ListAvailableCarsController'

const carsRoutes = Router()

const createCategoryController = new CreateCarController()
const listAvailableCarsUseCase = new ListAvailableCarsController()

carsRoutes.post(
    '/',
    ensureAuthenticated,
    ensureAdmin,
    createCategoryController.handle
)

carsRoutes.get('/avaliable', listAvailableCarsUseCase.handle)

export { carsRoutes }
