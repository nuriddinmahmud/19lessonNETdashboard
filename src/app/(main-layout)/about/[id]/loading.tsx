import { memo } from 'react';

const Loading = () => {
  return (
    <div className="Loading">
      <h2 className='text-center text-6xl'>Detail Loading...</h2>
    </div>
  );
};

export default memo(Loading);