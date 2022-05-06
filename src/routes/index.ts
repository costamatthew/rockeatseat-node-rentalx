import { Router } from "express"

import { categoriesRoutes } from './categories.routes'
import { specificationRoutes } from './specifications.routes'

import { usersRouters } from './users.routes'
import { authenticateRoutes } from './authenticate.routes'

const routes = Router()

routes.use('/categories', categoriesRoutes)
routes.use('/specifications', specificationRoutes)
routes.use('/users', usersRouters)
routes.use(authenticateRoutes)

export { routes }
