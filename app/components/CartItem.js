'use client'
import { useCart } from "../context/cart"
import { toast } from "react-toastify"

export default function CartItem({ product }) {
  const cart = useCart()

  const removeItemFromCart = () => {
    let res = confirm(`Are you sure you want to remove this? "${product.title}"`)
    if (res) {
        cart.removeFromCart(product)
        toast.info('Removed from cart', { autoClose: 3000 })
    }
  }

  return (
    <>
        <div className="relative flex justify-start my-2 border w-full p-6 md:hidden lg:hidden">
            <img src={product?.url+'/150'} className="rounded-md w-[60px] h-[60px]" />

            <div className="overflow-hidden pl-2 w-full">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center font-semibold justify-between w-[400px] text-[12px] underline">
                        {product?.title.substring(0, 9)}...
                    </div>
                    <div className="font-bold text-[10px]">
                        ${(product?.price / 100).toFixed(2)}
                    </div>
                </div>

                <div className="font-semibold mt-1 text-[10px] text-gray-400">
                    NEW
                </div>

                <div className="text-[10px] mt-1">
                    {product?.description.substring(0, 20)}...
                </div>

                <div className="absolute right-0 bottom-0 p-4 text-sm mb-1">
                    <button onClick={() => removeItemFromCart()} className="underline text-blue-500 text-[10px]">
                        Remove
                    </button>
                </div>
            </div>
        </div>





        <div className="relative hidden md:flex lg:flex justify-start my-2 border w-full p-6">
            <img src={product?.url+'/150'} className="rounded-md w-[150px] h-[150px]" />

            <div className="overflow-hidden pl-2 w-full">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center font-semibold justify-between w-[400px] text-[16px] underline">
                        {product?.title}
                    </div>
                    <div className="font-bold text-lg">
                        ${(product?.price / 100).toFixed(2)}
                    </div>
                </div>

                <div className="font-semibold mt-2">
                    NEW
                </div>

                <div className="text-sm mt-2">
                    {product?.description.substring(0, 150)}...
                </div>

                <div className="absolute right-0 bottom-0 p-4 text-sm">
                    <button onClick={() => removeItemFromCart()} className="underline text-blue-500">
                        Remove
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}
