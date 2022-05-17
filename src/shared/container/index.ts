import { container } from 'tsyringe'

import { ICategoriesRepository } from '@modules/cars/repositories/'
import { ISpecificationRepository } from '@modules/cars/repositories/'

import { CategoriesRepository, SpecificationRepository } from '@modules/cars/infra/typeorm/repositories'

import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository'
import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UserRepository'


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
