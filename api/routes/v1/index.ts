import { Router } from 'express'
import userRoutes from './userRoute'

const router = Router()

router.use('/users', userRoutes)

router.use('*', (req, res, next) => {
  res.status(200).send({
    message: 'Welcome to bun express api',
  })
})

export default router
