import { container } from 'tsyringe'

import { ICategoriesRepository } from '../../modules/cars/repositories/'
import { CategoriesRepository } from '../../modules/cars/repositories/implematations/'

import { ISpecificationRepository } from '../../modules/cars/repositories/'
import { SpecificationRepository } from '../../modules/cars/repositories/implematations/'

import { IUsersRepository } from '../../modules/accounts/repositories/IUsersRepository'
import { UsersRepository } from '../../modules/accounts/repositories/implementations/UserRepository'

container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
)

container.registerSingleton<ISpecificationRepository>(
    "SpecificationRepository",
    SpecificationRepository
)

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
)
