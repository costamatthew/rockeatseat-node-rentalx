import { AppError } from '@shared/errors/AppError'
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO'
import { CreateUserUseCase } from '../CreateUser/CreateUserUseCase'
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase'
import { UsersRepositoryInMemory } from '../../repositories/in-memory/UsersRepositoryInMemory'

let authenticateUserUseCase: AuthenticateUserUseCase
let usersRepositoryInMemory: UsersRepositoryInMemory
let createUserUseCase: CreateUserUseCase

describe('Authenticate User', () => {
    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoryInMemory()
        authenticateUserUseCase = new AuthenticateUserUseCase(
            usersRepositoryInMemory
        )
        createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory)
    })

    it('should be able to authenticate an user', async () => {
        const user: ICreateUserDTO = {
            driver_license: '000000',
            email: 'test@example.com',
            password: 'testpassword',
            name: 'User Test'
        }

        await createUserUseCase.execute(user)

        const result = await authenticateUserUseCase.execute({
            email: user.email,
            password: user.password
        })

        expect(result).toHaveProperty('token')
    })

    it('should not be able to authenticate an nonexistent user', () => {
        expect(async () => {
            await authenticateUserUseCase.execute({
                email: 'false@example.com',
                password: '1234'
            })
        }).rejects.toBeInstanceOf(AppError)
    })

    it('should not be able to authenticate with incorrect password', () => {
        expect(async () => {
            const user: ICreateUserDTO = {
                driver_license: '1111',
                email: 'test@example2.com',
                password: 'testpassword',
                name: 'User Password Test'
            }

            await createUserUseCase.execute(user)

            await authenticateUserUseCase.execute({
                email: user.email,
                password: 'incorrectPassword'
            })
        }).rejects.toBeInstanceOf(AppError)
    })
})
