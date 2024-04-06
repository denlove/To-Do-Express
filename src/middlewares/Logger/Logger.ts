import { IPrintLog } from '../../interfaces/ILogger'
import LogsBuilder from './LogsBuilder'

class Logger extends LogsBuilder {
    constructor() {
        super()
    }

    public printLog({ type, message }: IPrintLog) {
        this.addLog({ type, message })
    }
}

export default new Logger()
