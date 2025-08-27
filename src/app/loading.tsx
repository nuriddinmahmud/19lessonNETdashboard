import { memo } from 'react';

const Loading = () => {
  return (
    <div className="Loading">
      <h2>Suspense Loading</h2>
    </div>
  );
};

export default memo(Loading);