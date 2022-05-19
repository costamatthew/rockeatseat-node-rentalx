import { Router } from 'express'

import { ensureAdmin } from '../middlewares/ensureAdmin'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
import { CreateCarController } from '@modules/cars/useCases/createCar/CreateCarController'

const carsRoutes = Router()

const createCategoryController = new CreateCarController()

carsRoutes.post(
    '/',
    ensureAuthenticated,
    ensureAdmin,
    createCategoryController.handle
)

export { carsRoutes }
