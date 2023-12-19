import { useState, useEffect, Fragment } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
export type NavbarProps = {
  active?: string;
};
interface IUser {
  username:string
}
const Navbar: React.FC<NavbarProps> = (props) => {
  
  const { active } = props;
  const menuOptions = [
    {
      title: 'Page',
      icon: '/admin/menu.svg',
      link: '/admin/page',
    },
    {
      title: 'Category',
      icon: '/admin/tablet.svg',
      link: '/admin/category',
    },
    {
      title: 'Blog',
      icon: '/admin/suggests.svg',
      link: '/admin/blog',
    },
    {
      title: 'Account',
      icon: '/admin/account.png',
      link: '/admin/user',
    },
  ];

  const router = useRouter()
  const handleClick = () => {
    router.push('/admin')
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
    <div className='flex flex-col w-[100%] bg-[#2D3A3A] max-md:w-[35%] justify-between h-[100vh] text-white px-6 py-5'>
      <div className='z-20 bg-[#2D3A3A] '>
        <div onClick={handleClick} className='logo gap-[5px] flex font-bold text-sm items-center justify-center mb-10 cursor-pointer'>
        <Image src='/logofooter.png' alt='' width={50} height={50} className=' h-[30px] w-[42px]' />
          <span className=' font-bold text-[20px] text-white'>H & S Energy</span>
          {/* <img
            src='/logo.png'
            alt=''
            width={'80%'}
            height={'10%'}
          /> */}
        </div>
        <div className='menu-options relative flex-col justify-between'>
          {menuOptions.map(
            (
              item,
              idx
            ) => (
              <Link key={idx} href={item.link}>
                <div
                  className={`option text-lg font-semibold relative flex items-center py-3 mb-2 pl-2 cursor-pointer ${active == item.title
                    ? 'border-[#C4C4C4] '
                    : 'border-transparent'
                    } border-[1px] rounded-lg hover:border-white max-md:py-1 max-md:text-sm `}
                >
                  <img
                    src={item.icon}
                    alt='icon'
                    width='32px'
                    height='32px'
                  ></img>
                  <p className='pl-3'>{item.title}</p>
                </div>
              </Link>
            )
          )}
        </div>
      </div>

      <div className='profile-button'>
          <div className='flex items-center justify-around border-[#C4C4C4] border-[1px] rounded-lg py-2 lg:px-0 px-1 hover:border-[#707984] cursor-pointer'>
              <p className='text-field text-[15px] max-lg:text-xs max-md:text-[15px] font-normal pl-2 max-lg:pl-0 max-md:pl-2'>
                version 1.0
              </p>
          </div>
      </div>
    </div>
    <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
    </div>
  );
};
export default Navbar