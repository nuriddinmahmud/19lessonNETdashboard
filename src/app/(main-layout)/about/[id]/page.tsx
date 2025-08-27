// import { useParams } from "next/navigation";
import { memo } from "react";

//  useParams

const Detail = async ({params}:{params: {id: string}}) => {
  const id = await params.id
  // const { id } = useParams();
  const response = await fetch(`https://dummyjson.com/recipes/${id}`);
  const data = await response.json();
  console.log(data);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2">
        <div>
          <img src={data?.image} alt="" />
        </div>
        <div>
          <h1>{data?.name}</h1>
        </div>
      </div>

    </div>
  );
};

export default memo(Detail);
