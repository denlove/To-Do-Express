import { Application } from 'express'
import dotenv from 'dotenv'
import path from 'path'

class EnvVariables {
    public static vars() {
        dotenv.config({ path: path.join(__dirname, '../../.env') })

        const {
            PORT = 3000,
            PG_DATABASE = 'defaultName',
            PG_USERNAME = 'username',
            PG_PASSWORD = 'password',
            PG_PORT = 5432,
            PG_URI = 'postgres://username:password@postgres:5432/defaultName',
        } = process.env

        return { PORT, PG_DATABASE, PG_USERNAME, PG_PASSWORD, PG_PORT, PG_URI }
    }

    public static appLocals(_express: Application): Application {
        _express.locals.app = this.vars()
        return _express
    }
}

export default EnvVariables
