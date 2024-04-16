import RandomWord from '../models/RandomWord.model'

export const resolvers = {
    Query: {
        async randomWords() {
            await RandomWord.findAll({})
        },
    },

    Mutation: {
        async addRandomWord(_: any, { text }: any) {
            await RandomWord.sync()
            const record = await RandomWord.create({ text: text })
            await RandomWord.sync()

            return { id: record.getDataValue('id'), text: record.getDataValue('text') }
        },
    },
}
