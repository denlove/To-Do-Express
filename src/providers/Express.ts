import express, { Application } from 'express'
import EnvVariables from './EnvVariables'
import { SERVER_RUNNING_LOG } from '../utils/mock'
import RootMiddleware from '../middlewares/RootMiddleware'
import Routes from './Routes'

interface IExpress {
    express: Application
    boot(): void
}

class Express implements IExpress {
    public express: Application

    constructor() {
        this.express = express()
        this._envMounting()
        this._middlewaresMounting()
        this._routersMounting()
    }

    private _envMounting() {
        this.express = EnvVariables.appLocals(this.express)
    }

    private _middlewaresMounting() {
        this.express = RootMiddleware.mount(this.express)
    }

    private _routersMounting() {
        this.express = Routes.mountApiRouter(this.express)
        this.express = Routes.mountPathRouter(this.express)
        this.express = Routes.mountGraphqlRouter(this.express)
    }

    public boot() {
        const port = EnvVariables.vars().PORT
        this.express
            .listen(port, () => {
                return console.log(`${SERVER_RUNNING_LOG}${port}'`)
            })
            .on('error', _err => {
                return console.log('Error: ', _err.message)
            })
    }
}

export default Express
