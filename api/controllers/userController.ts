import { Request, Response } from 'express'

export const getAllUsers = (req: Request, res: Response) => {
  res.send({ message: 'User List' })
}

export const getUserById = (req: Request, res: Response) => {
  res.send({ message: `User with ID: ${req.params.id}` })
}
