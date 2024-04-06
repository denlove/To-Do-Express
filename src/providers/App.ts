import path from 'path'
import dotenv from 'dotenv'
import Logger from '../middlewares/Logger/Logger'
import Express from './Express'

interface BootstrapApp {
    loadServer(): void
    loadEnvConfig(): void
    loadDatabase?(): void
}

class App implements BootstrapApp {
    public loadEnvConfig() {
        Logger.printLog({ type: 'INFO', message: 'Configuration :: Booting' })
        dotenv.config({ path: path.join(__dirname, '../../.env') })
    }

    public loadServer() {
        Logger.printLog({ type: 'INFO', message: 'Server :: Booting' })
        Express.boot()
    }
}

export default new App()
