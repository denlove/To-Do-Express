import { Sequelize } from 'sequelize'
import EnvVariables from './EnvVariables'

export class Database {
    public static sequelize: Sequelize

    public static async init() {
        const { DB_DATABASE, DB_USERNAME, DB_PASSWORD } = EnvVariables.vars()

        Database.sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
            host: 'localhost',
            dialect: 'postgres',
        })

        try {
            await Database.sequelize.authenticate()
            console.log('Connection has been established successfully.')
        } catch (error) {
            console.error('Unable to connect to the database:', error)
        }
    }
}

export default Database.sequelize
