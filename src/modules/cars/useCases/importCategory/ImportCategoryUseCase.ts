import fs from 'fs'
import { parse } from 'csv-parse';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository'

interface IimportCategory {
    name: string
    description: string
}

class ImportCategoryUseCase {

    constructor(private categoriesRepository: ICategoriesRepository) { }

    loadCategories(file: any): Promise<IimportCategory[]> {
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file.path)
            const categories: IimportCategory[] = []

            const parseFile = parse()

            stream.pipe(parseFile)

            parseFile.on('data', async (line) => {
                const [name, description] = line
                categories.push({ name, description })
            }).on('end', () => {
                resolve(categories)
            }).on('error', (err) => {
                reject(err)
            })
        })
    }

    async execute(file: any): Promise<void> {
        const categories = await this.loadCategories(file)
        console.log(categories)
    }

}

export { ImportCategoryUseCase }
