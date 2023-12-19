"use client"
import React, { useState, useEffect } from 'react'
import { DataGrid, GridDeleteIcon, } from '@mui/x-data-grid';
import { Avatar, Box, Button, Typography } from '@mui/material';
import { MdAdminPanelSettings } from 'react-icons/md';
import { FaUserShield, FaUser } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import axios from 'axios';
import { toast } from 'react-toastify';
import Layout from '@/app/components/admin/Layout';
import Header from '@/app/components/admin/Header';
import { useRouter } from 'next/navigation';
import Link from 'next/link';


interface Person {
    _id: string;
    username: string;
    email: string;
    role: string;
}
const User = () => {
    const [users, setUsers] = useState<Person[]>([]);
    const [usersFilter, setUsersFilter] = useState<Person[]>([]);
    const [loading, setLoading] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const router = useRouter();

    const getData = async () => {
        setIsLoading(true)
        const data = await axios.get('/api/users');
        if (data) {
            setIsLoading(false)
            setUsers(data.data.data)
            setUsersFilter(data.data.data)
        }
        return data
    };
    useEffect(() => {
        getData()
    }, [])
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'username', headerName: 'UserName', width: 200 },
        { field: 'email', headerName: 'Email', width: 240 },
        {
            field: 'role',
            headerName: "Role",
            width: 150,
            renderCell: ({ row: { role } }: { row: { role: string } }) => {
                return (
                    <div className=' flex gap-2 items-center text-center border-[1px] py-2 p-4 justify-center rounded-[8px] w-[100%]'>
                        {role === 'Admin' && <MdAdminPanelSettings size={24} />}
                        {role === 'Staff' && <FaUserShield size={24} />}
                        <Typography sx={{ ml: "0px" }}>
                            {role}
                        </Typography>
                    </div>
                )
            }
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 270,
            sortable: false,
            disableClickEventBubbling: true,
            renderCell: (params: any) => {
                const user = params.row;
                return (
                    <div className='flex gap-5 justify-between'>
                         <Button onClick={() => handleEditUser(user?.id)} variant="contained" color="primary" size="small" style={{ backgroundColor: '#1976d2', color: 'white' }}>
                            Edit
                        </Button>{' '}
                        <Button onClick={() => handleDelete(user?.id)} variant="contained" color="error" size="small" startIcon={<GridDeleteIcon />} style={{ backgroundColor: '#d32f2f', color: 'white' }}>
                            Delete
                        </Button>
                    </div>
                );

            },
        }

    ]

    const handleEditUser = (id: string) => {
        router.push(`/admin/user/${id}`)
    }
    const handleDelete = async (id: string) => {
        try {
            await axios.delete(`/api/users/${id}`);
            toast.error('Successful Deletion !!!');
            getData();
        } catch (error) {
            toast.error('Delete Failure !!!');
        }
    };
    
    useEffect(() => {
        void getData();
        setLoading(false)
    }, [loading]);

    const toSlug = (str: string) => {
        str = str.toLowerCase();
        str = str
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '');
        str = str.replace(/[đĐ]/g, 'd');
        str = str.replace(/([^0-9a-z-\s])/g, '');
        return str;
    }
    const handleSearch = (e: any) => {
        let searchText = toSlug(e.target.value); 
        const filterProduct = usersFilter.filter(item => {
          let username = toSlug(item.username); 
          if (username.includes(searchText)) {
            return item;
          }
        });
        setUsers(filterProduct);
      };
      const handleAddUser = () => {
        router.push("/admin/user/create-user")
    }
    return (
        <>
            <Layout activate='user'>
                <>
                    <Header
                        title='Manager User'
                        className='relative max-md:fixed '
                    />
                    <Box className='h-[400px] w-full px-3 py-3'>
                        <div className='flex justify-between pb-3'>
                            <div className=" flex  items-center border-[1px] rounded-[8px] px-3 overflow-hidden" >
                                <input onChange={handleSearch} type="search" name="" placeholder='Find a Station...' className=' outline-none py-2 p-3 ' style={{ background: 'none', border: 'none', color: 'black' }} />
                                <AiOutlineSearch size={24} className=' text-[#a8a8aa]' />
                            </div>
                                <Button onClick={handleAddUser} variant="contained" color="primary" size="small" style={{ backgroundColor: '#1976d2', color: 'white' }} >
                                    Add
                                </Button>
                        </div>
                        {isLoading ? (
                                <div className='p-5 flex justify-center items-center'>
                                    <img src="/admin/loading.png" alt="" className='animate-spin h-[80px]' />
                                </div>
                            ) : (
                        <DataGrid
                            columns={columns}
                            checkboxSelection
                            pagination
                            rows={users?.map((user) => ({
                                id: user?._id,
                                username: user?.username,
                                email: user?.email,
                                role: user?.role
                            }))}
                        />
                        )}
                    </Box>
                </>
            </Layout>
        </>
    )
}

export default User