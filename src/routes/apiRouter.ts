import express, { Router } from 'express'
import { ALL_USER_TASKS_API, WELCOME_WORD_API } from '../utils/routes'
import RandomWordController from '../controllers/api/RandowWord.controller'
import TaskController from '../controllers/api/Task.controller'

const apiRouter: Router = express.Router()

apiRouter.get(WELCOME_WORD_API, RandomWordController.getWord)
apiRouter.get(ALL_USER_TASKS_API, TaskController.getAllTasks)

export default apiRouter
