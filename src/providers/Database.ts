import { Sequelize } from 'sequelize'
import EnvVariables from './EnvVariables'
const { PG_URI } = EnvVariables.vars()

const sequelize = new Sequelize(PG_URI)

export const connectDatabase = async (sequelize: Sequelize) => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        console.log('Connection has been established successfully.')
    } catch (error) {
        console.error('Unable to connect to the database:', error)
    }
}

export default sequelize
