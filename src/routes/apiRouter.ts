import express, { Router } from 'express'
import { ALL_USER_TASKS_API, HOME_ROUTE, WELCOME_WORD_API } from '../utils/routes'
import HomeController from '../controllers/HomeController'

const apiRouter: Router = express.Router()

apiRouter.get(WELCOME_WORD_API, HomeController.getRandomWelcomeWord)
apiRouter.get(ALL_USER_TASKS_API, HomeController.getAllTasks)

export default apiRouter
