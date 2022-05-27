import { container } from 'tsyringe'

import '@shared/container/providers'

import { ICategoriesRepository } from '@modules/cars/repositories/ICategoriesRepository'
import { ISpecificationsRepository } from '@modules/cars/repositories/ISpecificationsRepository'

import {
    CarsRepository,
    CategoriesRepository,
    SpecificationsRepository,
    CarsImagesRepository
} from '@modules/cars/infra/typeorm/repositories'

import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository'
import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UserRepository'
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository'
import { ICarsImagesRepository } from '@modules/cars/repositories/ICarsImagesRepository'

container.registerSingleton<ICategoriesRepository>(
    'CategoriesRepository',
    CategoriesRepository
)

container.registerSingleton<ISpecificationsRepository>(
    'SpecificationsRepository',
    SpecificationsRepository
)

container.registerSingleton<IUsersRepository>(
    'UsersRepository',
    UsersRepository
)

container.registerSingleton<ICarsRepository>('CarsRepository', CarsRepository)

container.registerSingleton<ICarsImagesRepository>(
    'CarsImagesRepository',
    CarsImagesRepository
)
