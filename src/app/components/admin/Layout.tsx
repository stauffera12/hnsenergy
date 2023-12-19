import { CSSProperties, useEffect, useRef, useState } from 'react';
import Navbar from './Navbar';
import { useRouter } from 'next/navigation';
// import { AppProvider } from '../core/AppContext';
// import { Auth } from './Auth';



export type LayoutProps = {
  children: JSX.Element;
  containerStyle?: CSSProperties;
  activate?: string;
};
const Layout: React.FC<LayoutProps> = (props) => {
  const { children, activate } = props;


  return (
    <main className={`bg-[#ffffff] text-black md:overflow-hidden`}>
      <div className={`h-[100vh] flex flex-nowrap w-full md:static  `}>
        <div className='w-[20%]'>
          <Navbar active={activate} />
        </div>
        <div className='md:pb-0 w-[80%]' ref={useRef<HTMLDivElement>(null)}>
          {children}
        </div>
      </div>
    </main>
  ) ;
};
export default Layout;
