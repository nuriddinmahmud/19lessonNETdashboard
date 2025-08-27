"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FC, memo } from 'react';

const FoodView:FC<{data: any}> = ({data}) => {
  const router = useRouter()

  return (
    <div className="FoodView">
       <div>
        {data?.map((item: any) => (
          <div key={item.id}>
            <div >
              <Image onClick={()=> router.push(`/about/${item.id}`)} src={item.image} width={500} height={300} alt="" />
            </div>
            <div>
              <h3>{item.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(FoodView);