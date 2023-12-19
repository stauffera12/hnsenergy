"use client"
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    const loggedIn = false;

    const redirectUser = () => {
      if (loggedIn) {
        router.push('/admin/blog');
      } else {
        router.push('/admin/login');
      }
    };

    redirectUser();
  }, [router]);

  return (
  <>
  <div>
  <Image src='/admin/page.svg' alt='' width={100} height={100} className=' bg-white h-screen w-[100%] object-cover' />
  </div>
  </>
  );
};

export default Home;
