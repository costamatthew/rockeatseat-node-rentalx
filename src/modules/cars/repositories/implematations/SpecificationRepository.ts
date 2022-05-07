import { getRepository, Repository } from 'typeorm'
import { Specification } from '../../entities/Specification'
import { ISpecificationRepository, ICreateSpecificationDTO } from "../ISpecificationRepository"

class SpecificationRepository implements ISpecificationRepository {
    private repository: Repository<Specification>

    constructor() {
        this.repository = getRepository(Specification)
    }

    async create({ name, description }: ICreateSpecificationDTO): Promise<Specification> {
        const specification = this.repository.create({ 
            name, description 
        })

        specification.created_at = new Date()

        await this.repository.save(specification)

        return specification;
    }

    async findByName(name: string): Promise<Specification> {
        const specification = await this.repository.findOne({ name })

        return specification
    }
}

export { SpecificationRepository }
