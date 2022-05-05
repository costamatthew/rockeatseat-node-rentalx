import { inject } from 'tsyringe';

import { UsersRepository } from '../../repositories/implementations/UserRepository';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';

class CreateUserUseCase {
    
    constructor(
        @inject('UsersRepository')
        private usersRepository: UsersRepository
    ) {}

    async execute(data: ICreateUserDTO): Promise<void> {
        const { name, username, email, password, driver_license } = data

        await this.usersRepository.create({
            name,
            username,
            email,
            password,
            driver_license
        })
    }

}

export { CreateUserUseCase }
