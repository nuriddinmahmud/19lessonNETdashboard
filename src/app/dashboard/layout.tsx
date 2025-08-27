import Sidebar from '@/components/sidebar/Sidebar';
import React, { memo } from 'react';

const Layout = ({children}:{children: React.ReactNode}) => {
  return (
    <div className="flex ">
      <Sidebar/>
      <div className='flex-1'>
        {children}
      </div>
    </div>
  );
};

export default memo(Layout);