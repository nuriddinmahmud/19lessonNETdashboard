import Image from 'next/image';
import { memo } from 'react';
import photo from "@/assets/rasm.jpg"

const Page = () => {
  return (
    <div className="Page">
      <h2>News Page</h2>
      <Image src={photo} alt=''/>
      <Image src={"https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8="} width={400} height={300} alt=''/>
    </div>
  );
};

export default memo(Page);