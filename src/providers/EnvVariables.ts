import { Application } from 'express'
import dotenv from 'dotenv'
import path from 'path'

class EnvVariables {
    public static vars() {
        dotenv.config({ path: path.join(__dirname, '../../.env') })

        const {
            PORT = 3000,
            DB_DATABASE = 'defaultName',
            DB_USERNAME = 'username',
            DB_PASSWORD = 'password',
        } = process.env

        return { PORT, DB_DATABASE, DB_USERNAME, DB_PASSWORD }
    }

    public static appLocals(_express: Application): Application {
        _express.locals.app = this.vars()
        return _express
    }
}

export default EnvVariables
