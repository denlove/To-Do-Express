import { Request, Response } from 'express'

class HomeController {
    public static homePage(req: Request, res: Response) {
        res.set({ 'Content-Type': 'text/plain', 'Confirm-Test': 'confirm' })
        res.status(200).send('Hello, World!')
    }
}

export default HomeController
