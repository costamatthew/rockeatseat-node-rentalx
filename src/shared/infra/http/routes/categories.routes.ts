import { Router } from "express"
import multer from 'multer'

import { ensureAdmin } from '../middlewares/ensureAdmin'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

import { CreateCategoryController } from "@modules/cars/useCases/createCategory/CreateCategoryController"
import { ListCategoriesController } from "@modules/cars/useCases/listCategories/ListCategoriesController"
import { ImportCategoryController } from "@modules/cars/useCases/importCategory/ImportCategoryController"

const categoriesRoutes = Router()

const upload = multer({
    dest: './temp',
})

const createCategoryController = new CreateCategoryController()
const listCategoriesController = new ListCategoriesController()
const importCategoryController = new ImportCategoryController()

categoriesRoutes.post(
    '/',
    ensureAuthenticated,
    ensureAdmin,
    createCategoryController.handle
)

categoriesRoutes.get('/', listCategoriesController.handle)

categoriesRoutes.post(
    '/import',
    upload.single('file'),
    ensureAuthenticated,
    ensureAdmin,
    importCategoryController.handle
)

export { categoriesRoutes }
