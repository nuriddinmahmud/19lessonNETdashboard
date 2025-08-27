"use client"
import Image from 'next/image';
import { memo, useEffect, useState } from 'react';

interface IProduct {
  id: number
  title: string
  price: number
  thumbnail: string
}

interface IResponse {
  products: IProduct[]
  limit: number
  skip: number
  total: number
}

const Contact = () => {
  const [data,setData] = useState<null | IResponse>(null)
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    fetch("https://dummyjson.com/products")
    .then(res => res.json())
    .then(res => setData(res))
  }, [])

  
  
  return (
    <div className="Page">
      <h2>Contact CRS</h2>
      <div>
        {
          data?.products?.map((product:IProduct)=> (
            <div key={product.id}>
              <Image src={product.thumbnail} width={500} height={300} alt=''/>
              <h2>{product.title}</h2>
              <strong>{product.price} USD</strong>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default memo(Contact);