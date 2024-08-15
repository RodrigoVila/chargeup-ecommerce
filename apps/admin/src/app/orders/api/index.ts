import { NextApiRequest, NextApiResponse } from 'next'
import { Order } from '@packages/models'
import { dbConnect } from '~/utils/dbConnect'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req

  await dbConnect()

  const getOrders = async () => {
    try {
      const orders = await Order.find({})
      return res.status(200).json({ success: true, orders })
    } catch (e: any) {
      return res.status(400).json({
        success: false,
        message: e.message,
      })
    }
  }

  const addNewOrder = async () => {
    try {
      const order = await Order.create(body)
      return res.status(201).json(order)
    } catch (e) {
      return res.status(400).json({
        success: false,
      })
    }
  }

  switch (method) {
    case 'GET':
      return getOrders()
    case 'POST':
      return addNewOrder()
    default:
      return res.status(405).end(`Method ${method} Not Allowed`)
  }
}
