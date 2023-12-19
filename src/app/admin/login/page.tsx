"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import axios from 'axios';
import { authLogin } from '../../core/ApiService';
import { authLoginDispatch, useAppDispatch, useAppState } from '../../core/AppContext';
import Image from 'next/image';
import { Auth, RequireLogin } from '@/app/@types';

const Login = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const { user } = useAppState();
    const [formLogin, setFormLogin] = useState<Auth>({
        email: '',
        password: '',
    });
    const [requireLogin, setRequireLogin] = useState<RequireLogin>({
        email: false,
        password: false,
    });

    useEffect(() => {
        if (user.token) {
            router.push('/admin/blog');
        }
    }, []);

    const handleLogin = async () => {
        if (!formLogin.email || !formLogin.password) {
            setRequireLogin({
                email: !formLogin.email,
                password: !formLogin.password,
            });
            return;
        }
        const res = await authLogin({
            email: formLogin?.email,
            password: formLogin?.password,
        });

        if (res && res.token) {
            const { token } = res;
            const { email, username } = res.user;
            Cookies.set('token', res.token);
            localStorage.setItem('token', res.token);
            authLoginDispatch(dispatch, { email, name: username, token });
            axios.defaults.headers.common['Authorization'] =
                `Bearer ` + res.accessToken;
            router.push('/admin/blog');
            if (res.user) {
                localStorage.setItem('userId', res.user);
            }
        }
    };

    return (
        <div className=' bg-[#102c4e] h-[100vh] w-[100%] flex items-center'>
            <div className=' flex bg-black w-[100%] h-[80vh] max-md:h-[100vh] flex-wrap-reverse mx-[200px] max-md:mx-0 max-lg:mx-[100px]  rounded-[24px]'>
                <div className='w-[45%] max-md:w-[100%] max-lg:w-[100%] bg-white text-[#102c4e] rounded-l-[24px] max-md:rounded-none max-lg:rounded-b-[24px] max-lg:rounded-none p-10'>
                    <div className=' flex justify-center items-center text-center max-md:flex-none gap-5'>
                        <Image src='/logo.png' alt='' width={50} height={50} className=' h-[30px] w-[40px]' />
                        <h1 className=' text-[24px] font-semibold'>H & S Energy</h1>
                    </div>
                    <h1 className=' text-[20px] mt-10'>Welcome Back, Please login to your account</h1>
                    <div className='mt-3'>
                        <div className='flex flex-col'>
                            <label htmlFor="" className='text-[16px] font-semibold'>Email</label>
                            <input
                                onFocus={() => setRequireLogin({ ...requireLogin, email: false })}
                                onChange={(e) =>
                                    setFormLogin({ ...formLogin, email: e.target.value })
                                }
                                type="email" name="" id="" placeholder='hnsenergyproducts@gmail.com' className=' mt-2 outline-none border-[1px] rounded-[8px] py-2 p-4' />
                            {requireLogin.email && (
                                <p className='text-[#102c4e] text-[12px] pt-[2px]'>
                                    Please enter email
                                </p>
                            )}
                        </div>
                        <div className='flex flex-col mt-3'>
                            <label htmlFor="" className='text-[16px] font-semibold'>Password</label>
                            <input
                                onFocus={() => setRequireLogin({ ...requireLogin, password: false })}
                                onChange={(e) =>
                                    setFormLogin({ ...formLogin, password: e.target.value })
                                }
                                type="password" name="" id="" placeholder='***********' className=' mt-2 outline-none border-[1px] rounded-[8px] py-2 p-4' />
                            {requireLogin.password && (
                                <p className='text-[#102c4e] text-[12px] pt-[2px]'>
                                    Please enter password
                                </p>
                            )}
                        </div>
                    </div>
                    <div onClick={handleLogin} className=' flex justify-center bg-[#102c4e] py-2 rounded-[8px] mt-5 cursor-pointer' >
                        <button
                            className='text-center text-white'>
                            Login
                        </button>
                    </div>
                </div>
                <div className='w-[55%] max-md:w-[100%] max-lg:w-[100%] max-lg:rounded-t-[24px] max-md:rounded-none bg-[#af272f] rounded-r-[24px] max-lg:rounded-none flex justify-center items-center '>
                    <Image src='/admin/login.svg' alt='' width={250} height={150} className=' h-[200px] w-[300px]' />
                </div>
            </div>
        </div>
    )
}

export default Login