import { Router } from 'express'

import { categoriesRoutes } from './categories.routes'
import { specificationRoutes } from './specifications.routes'

import { usersRouters } from './users.routes'
import { carsRoutes } from './cars.routes'

import { authenticateRoutes } from './authenticate.routes'
import { passwordRoutes } from './password.routes'

const routes = Router()

routes.use('/categories', categoriesRoutes)
routes.use('/specifications', specificationRoutes)
routes.use('/users', usersRouters)
routes.use('/cars', carsRoutes)
routes.use('/password', passwordRoutes)
routes.use(authenticateRoutes)

export { routes }
