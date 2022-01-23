import fs from 'fs'
import csvParser from 'csv-parser'

class ImportCategoryUseCase {

    execute(file: any): void {
        const stream = fs.createReadStream(file.path)

        const parseFile = csvParser()

        stream.pipe(parseFile)

        parseFile.on('data', async (line) => {
            console.log(line)
        })
    }

}

export { ImportCategoryUseCase }
