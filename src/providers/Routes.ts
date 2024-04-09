import { Application } from 'express'
import Logger from '../middlewares/Logger/Logger'
import { MOUNTING_API_LOG, MOUNTING_PATH_LOG } from '../utils/mock'
import { API_ROUTE, HOME_ROUTE } from '../utils/routes'
import apiRouter from '../routes/apiRouter'
import pathRouter from '../routes/pathRouter'

class Routes {
    public mountApiRouter(_express: Application): Application {
        Logger.printLog({ type: 'INFO', message: MOUNTING_API_LOG })

        return _express.use(API_ROUTE, apiRouter)
    }

    public mountPathRouter(_express: Application): Application {
        Logger.printLog({ type: 'INFO', message: MOUNTING_PATH_LOG })

        return _express.use(HOME_ROUTE, pathRouter)
    }
}

export default new Routes()
