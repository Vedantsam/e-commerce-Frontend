import React from 'react'
import "./ProductCard.css"
import { useNavigate } from "react-router-dom";

const ProductCard = ({product}) => {
  const navigate = useNavigate();
  
  return (
    <div 
      onClick={() => navigate(`/product/${product.id}`)} 
      className="productCard w-[15rem] m-3 transition-all cursor-pointer hover:scale-105 hover:shadow-lg"
    >
      <div className='h-[20rem]'>
        <img 
          className='h-full w-full object-cover object-left-top rounded-t-md' 
          src={product.imageUrl} 
          alt={product.title || 'Product image'} 
        />
      </div>
      
      <div className='textPart bg-white p-3 rounded-b-md'>
        <div className='mb-2'>
          <p className='font-bold opacity-60 text-sm'>{product.brand}</p>
          <p className='text-sm text-gray-800 line-clamp-2'>{product.title}</p>
        </div>
        
        <div className='flex items-center space-x-2'>
          <p className='font-semibold text-lg'>₹{product.discountedPrice}</p>
          <p className="line-through opacity-50 text-sm">₹{product.price}</p>
          <p className='text-green-600 font-semibold text-sm'>{product.discountPersent}% off</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard