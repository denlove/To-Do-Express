import express, { Application } from 'express'
import cors from 'cors'
import { expressMiddleware } from '@apollo/server/express4'
import Logger from '../middlewares/Logger/Logger'
import { MOUNTING_API_LOG, MOUNTING_GRAPHQL_LOG, MOUNTING_PATH_LOG } from '../utils/mock'
import { API_ROUTE, GRAPHQL_ROUTE, HOME_ROUTE } from '../utils/routes'
import apiRouter from '../routes/apiRouter'
import pathRouter from '../routes/pathRouter'
import apolloServer from './Apollo'

class Routes {
    public mountApiRouter(_express: Application): Application {
        Logger.printLog({ type: 'INFO', message: MOUNTING_API_LOG })

        return _express.use(API_ROUTE, apiRouter)
    }

    public mountPathRouter(_express: Application): Application {
        Logger.printLog({ type: 'INFO', message: MOUNTING_PATH_LOG })

        return _express.use(HOME_ROUTE, pathRouter)
    }

    public mountGraphqlRouter(_express: Application): Application {
        Logger.printLog({ type: 'INFO', message: MOUNTING_GRAPHQL_LOG })

        return _express.use(GRAPHQL_ROUTE, cors(), express.json(), expressMiddleware(apolloServer))
    }
}

export default new Routes()
