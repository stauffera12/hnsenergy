"use client"
import React, { useState, useEffect } from 'react'
import { AiOutlineRight } from "react-icons/ai"
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import { toast } from 'react-toastify';
import validator from 'validator';
import axios from 'axios';
import Layout from '@/app/components/admin/Layout';
import Header from '@/app/components/admin/Header';
import { Button } from '@mui/material';
interface IUser {
    username: string,
    role: string,
    email: string,
    password: string,
}
interface User {
    username: boolean;
    role: boolean;
    email: boolean;
    password: boolean;
}
const CreateUser = () => {
    const router = useRouter();
    const [formUser, setFormUser] = useState<IUser>({
        username: '',
        role: '',
        email: '',
        password: '',

    })

    const [requireSetting, setRequireSetting] = useState<User>({
        username: false,
        role: false,
        email: false,
        password: false
    });

    const handleCreate = async () => {
        if (!formUser.username || !formUser.email || !formUser.role || !formUser.password) {
            setRequireSetting({
                username: !formUser.username,
                email: !formUser.email,
                role: !formUser.role,
                password: !formUser.password,
            });
            return;
        }
        if (!validator.isEmail(formUser.email)) {
            toast.warning('Please enter a valid email address !!!');
            return;
        }
        await axios
            .post('/api/users', {
                username: formUser.username,
                role: formUser.role,
                password: formUser.password,
                email: formUser.email,
            })
            .then((response) => {
                toast.success('More Successes !!!')
                router.push('/admin/user')
            })
            .catch((error) => {
                console.log(error);
                toast.error('More Failures !!!')
            });
    };

    return (
        <>
            <Layout activate='User'>
                <>
                    <Header
                        title='Create User'
                        strong
                        className='relative max-md:fixed'
                        isBack
                    />
                    <div id='stylescroll' className='flex flex-col items-start pb-20 overflow-auto h-screen'>
                        <div className='flex flex-col w-full p-3 gap-[10px]'>
                            <div className='flex flex-col gap-[5px]'>
                                <label className='text-[#111928] font-medium text-[18px]' >Name</label>
                                <input
                                    value={formUser?.username}
                                    onChange={e =>
                                        setFormUser({ ...formUser, username: e.target.value })
                                    }
                                    onFocus={() => setRequireSetting({ ...requireSetting, username: false })}
                                    type="text" id='input' placeholder='Enter Name' className=' outline-none py-2 p-4 border-[1px] rounded-[5px]' />
                                {requireSetting.username && (
                                    <p className='text-blue-500 w-[55%] max-md:w-full text-[13px] '>
                                        Please enter the UserName !!!
                                    </p>
                                )}
                            </div>
                            <div className='flex flex-col gap-[5px]'>
                                <label className='text-[#111928] font-medium text-[18px]' >Email</label>
                                <input
                                    type="email" name='email' className='outline-none py-2 p-4 border-[1px] rounded-[5px]'
                                    placeholder='hnsenergyproducts@gmail.com'
                                    value={formUser?.email}
                                    onChange={(e) => setFormUser({ ...formUser, email: e.target.value })}
                                    onFocus={() => setRequireSetting({ ...requireSetting, email: false })}
                                />
                                {requireSetting.email && (
                                    <p className='text-blue-500 w-[55%] max-md:w-full text-[13px] '>
                                        Please enter the Email !!!
                                    </p>
                                )}
                            </div>
                            <div className='flex flex-col gap-[5px]'>
                                <label className='text-[#111928] font-medium text-[18px]' >Role</label>
                                <select
                                    onChange={e => setFormUser({ ...formUser, role: e.target.value })}
                                    onFocus={() => setRequireSetting({ ...requireSetting, role: false })}

                                    name="" id="" className='w-[25%] outline-none py-2 p-4 border-[1px] rounded-[5px] ' >
                                    <option value="">Select Role</option>
                                    <option value="Admin">Admin</option>
                                    <option value="Staff">Staff</option>
                                </select>
                                {requireSetting.role && (
                                    <p className='text-blue-500  max-md:w-full text-[13px] '>
                                        Please enter the Role !!!
                                    </p>
                                )}
                            </div>
                            <div className='flex flex-col gap-[5px]'>
                                <label className='text-[#111928] font-medium text-[18px]' >Password</label>
                                <input type="password" placeholder='**********' name='password' className='outline-none py-2 p-4 border-[1px] rounded-[5px]'
                                    value={formUser?.password}
                                    onChange={(e) => setFormUser({ ...formUser, password: e.target.value })}
                                    onFocus={() => setRequireSetting({ ...requireSetting, password: false })}
                                />
                                {requireSetting.password && (
                                    <p className='text-blue-500 w-[55%] max-md:w-full text-[13px] '>
                                        Please enter the PassWord !!!
                                    </p>
                                )}
                            </div>
                            <div className='flex justify-end items-end pt-[10px] '>
                                <Button
                                    onClick={handleCreate}
                                    variant="contained"
                                    style={{ backgroundColor: '#1976d2', color: 'white', textTransform: 'none' }}
                                >
                                    Publish
                                </Button>
                            </div>
                        </div>
                    </div>
                </>
            </Layout>
        </>
    )
}

export default CreateUser