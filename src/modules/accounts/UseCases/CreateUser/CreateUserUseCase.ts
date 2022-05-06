import { inject, injectable } from 'tsyringe';
import { hash } from 'bcryptjs'

import { UsersRepository } from '../../repositories/implementations/UserRepository';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';

@injectable()
class CreateUserUseCase {
    
    constructor(
        @inject('UsersRepository')
        private usersRepository: UsersRepository
    ) {}

    async execute(data: ICreateUserDTO): Promise<void> {
        const { name, email, password, driver_license } = data

        const userAlreadyExists = await this.usersRepository.findByEmail(email)

        if (userAlreadyExists) {
            throw new Error('User already exists')
        }

        const passwordHash = await hash(password, 8)

        await this.usersRepository.create({
            name,
            email,
            password: passwordHash,
            driver_license
        })
    }

}

export { CreateUserUseCase }
