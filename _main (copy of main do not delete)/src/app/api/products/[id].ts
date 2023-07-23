import { NextApiRequest, NextApiResponse } from 'next'

import { Product } from '~models'
import { dbConnect } from '~utils'

const ProductsByID = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { id },
    method,
    body,
  } = req

  await dbConnect()

  const getProduct = async () => {
    try {
      const product = await Product.findById(id)

      return res.status(200).json(product)
    } catch (e:any) {
      return res.status(404).json({
        success: false,
      })
    }
  }

  const updateProduct = async () => {
    try {
      const product = await Product.findByIdAndUpdate(id, body, {
        new: true,
        runValidators: true,
      })

      return res.status(200).json(product)
    } catch (e:any) {
      return res.status(400).json({
        success: false,
      })
    }
  }
  const deleteProduct = async () => {
    try {
      await Product.deleteOne({ _id: id })

      return res.status(200).json({ message: `Product ${id} deleted successfully` })
    } catch (e:any) {
      return res.status(400).json({
        success: false,
      })
    }
  }

  switch (method) {
    case 'GET':
      return getProduct()
    case 'PUT':
      return updateProduct()
    case 'DELETE':
      return deleteProduct()
    default:
      return res.status(405).end(`Method ${method} Not Allowed`)
  }
}

export default ProductsByID
