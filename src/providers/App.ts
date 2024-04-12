import path from 'path'
import dotenv from 'dotenv'
import Logger from '../middlewares/Logger/Logger'
import Express from './Express'
import { Database } from './Database'
import { BOOTING_DB_LOG, BOOTING_ENV_LOG, BOOTING_SERVER_LOG } from '../utils/mock'

interface BootstrapApp {
    loadServer(): void
    loadEnvConfig(): void
    loadDatabase?(): void
}

class App implements BootstrapApp {
    public loadEnvConfig() {
        Logger.printLog({ type: 'INFO', message: BOOTING_ENV_LOG })
        dotenv.config({ path: path.join(__dirname, '../../.env') })
    }

    public loadDatabase() {
        Logger.printLog({ type: 'INFO', message: BOOTING_DB_LOG })
        Database.init()
    }

    public loadServer() {
        Logger.printLog({ type: 'INFO', message: BOOTING_SERVER_LOG })
        Express.boot()
    }
}

export default new App()
