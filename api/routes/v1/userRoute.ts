import { Router } from 'express'
import * as UserController from '../../controllers/userController'

const router = Router()

router.get('/', UserController.getAllUsers)
router.get('/:id', UserController.getUserById)

export default router
