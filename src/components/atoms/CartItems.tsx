import React from 'react'

type Props = {
    items: number
}

const CartItems = ({items}:Props) => {
    return (
        <div className="absolute top-0 right-0 text-sm bg-red-500 rounded-full">
            {items}
        </div>
    )
}

export default CartItems
