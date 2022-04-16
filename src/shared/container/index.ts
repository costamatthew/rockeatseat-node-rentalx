import { container } from 'tsyringe'

import { ICategoriesRepository } from '../../modules/cars/repositories/'
import { CategoriesRepository } from '../../modules/cars/repositories/implematations/'

import { ISpecificationRepository } from '../../modules/cars/repositories/'
import { SpecificationRepository } from '../../modules/cars/repositories/implematations/'

// ICategoriesRepository
container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
)

// ISpecificationRepository
container.registerSingleton<ISpecificationRepository>(
    "SpecificationRepository",
    SpecificationRepository
)
