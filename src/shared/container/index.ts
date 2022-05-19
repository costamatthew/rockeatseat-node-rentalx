import { container } from 'tsyringe'

import { ICategoriesRepository } from '@modules/cars/repositories/'
import { ISpecificationRepository } from '@modules/cars/repositories/'

import { 
    CarsRepository, CategoriesRepository, SpecificationRepository 
} from '@modules/cars/infra/typeorm/repositories'

import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository'
import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UserRepository'
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository'


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

container.registerSingleton<ICarsRepository>(
    "CarsRepository",
    CarsRepository
)
