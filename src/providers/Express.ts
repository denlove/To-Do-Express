import express, { Application } from 'express'
import EnvVariables from './EnvVariables'
import { SERVER_RUNNING_LOG } from '../utils/mock'

class Express {
    public express: Application

    constructor() {
        this.express = express()
        this._envMounting()
    }

    private _envMounting() {
        this.express = EnvVariables.appLocals(this.express)
    }

    public boot() {
        const port = EnvVariables.vars().port
        this.express
            .listen(port, () => {
                return console.log(`${SERVER_RUNNING_LOG}${port}'`)
            })
            .on('error', _err => {
                return console.log('Error: ', _err.message)
            })
    }
}

export default new Express()
