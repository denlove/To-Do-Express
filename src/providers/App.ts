import path from 'path'
import dotenv from 'dotenv'
import Logger from '../middlewares/Logger/Logger'
import Express from './Express'
import sequelize, { connectDatabase } from './Database'
import { BOOTING_DB_LOG, BOOTING_ENV_LOG, BOOTING_SERVER_LOG } from '../utils/mock'
import apolloServer, { startApolloServer } from './Apollo'

interface BootstrapApp {
    loadEnvConfig(): void
    loadDatabase?(): void
    loadServer(): void
}

class App implements BootstrapApp {
    public loadEnvConfig() {
        Logger.printLog({ type: 'INFO', message: BOOTING_ENV_LOG })
        dotenv.config({ path: path.join(__dirname, '../../.env') })
    }

    public loadDatabase() {
        Logger.printLog({ type: 'INFO', message: BOOTING_DB_LOG })
        connectDatabase(sequelize)
    }

    public async loadServer() {
        Logger.printLog({ type: 'INFO', message: BOOTING_SERVER_LOG })
        await startApolloServer(apolloServer)
        return new Express().boot()
    }
}

export default new App()
