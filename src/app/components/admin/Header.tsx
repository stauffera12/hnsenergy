
import Link from 'next/link';
import { useState, useEffect } from 'react';
import DropDown from './DropDown';
import { Icon } from './Icon';



export type MenuProps = {
  title?: string;
  className?: string;
  strong?: boolean;
  buttons?: {
    title: string;
    color: string;
    icon: string;
    link?: string;
    onClick?: () => void;
  }[];
  isBack?: boolean;
  isOption?: boolean;
};
const Header: React.FC<MenuProps> = (props) => {
  const { title, className, strong, buttons, isBack, isOption } = props;
  const [check, setCheck] = useState<boolean>(true)

  return (
    <div
      className={`${className} fixed z-[30] text-[#09132C] w-full px-6 py-4 bg-[#fafafa] flex items-center justify-between`}
    >
      <div
        className='md:hidden font-bold cursor-pointer hover:text-[#486fd2]'
      >
        <Icon name='menu' size='md' />
      </div>
      <div className='left-group  flex items-center'>
        {isBack && (
          <div
            className='back-button mr-4 cursor-pointer max-md:hidden hover:text-[#486fd2]'
            onClick={() => window.history.back()}
          >
            <Icon name='chevron-back' size='md' />
          </div>
        )}
        <div
          className={`${strong ? 'font-semibold' : 'font-normal'
            } text-lg max-md:text-sm max-md:max-w-[200px] max-md:text-center`}
        >
          <p>{title}</p>
        </div>
      </div>
      <div className='right-group flex items-center'>
        {isOption && (
          <div className='action-bar font-bold cursor-pointer hover:text-[#486fd2]'>
            <Icon name='chevron-down' size='md' />
          </div>
        )}

        {buttons && (
          <>
            <div className=' w-12 md:hidden'>
              {/* <Icon name='chevron-down' size='md' /> */}
            </div>
            <div className='button group max-md:absolute max-md:right-2 max-md:h-8 max-md:w-[95px] max-md:flex '>
              {buttons.map((item, idx) => (
                <button
                  style={{ backgroundColor: item.color }}
                  key={idx}
                  onClick={item.onClick}
                  className=' max-md:w-full  max-md:px-2 py-2 px-3 flex relative gap-1 items-center text-white rounded-[10px] font-semibold hover:opacity-90'
                >
                  {item.link && (
                    <Link
                      href={check ? item.link : '/usage'}
                      // {item.link}
                      className=' h-full absolute left-0 right-0  '
                    ></Link>
                  )}
                  <img className='max-md:w-5' src='/images/diamond.svg'></img>
                  <span className='max-md:text-[13px]'>
                    {check ? item.title : `"plan"Pro`}
                  </span>
                </button>
              ))}
            </div>
          </>


        )}
      </div>
      <div>
        <DropDown />
      </div>
    </div>
  );
};

export default Header;
