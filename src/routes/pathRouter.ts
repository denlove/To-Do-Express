import express from 'express'
import { HOME_ROUTE } from '../utils/routes'
import HomeController from '../controllers/Home.controller'

const pathRouter = express.Router()

pathRouter.get(HOME_ROUTE, HomeController.homePage)

export default pathRouter
