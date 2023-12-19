"use client"
import React, { useState, useEffect } from 'react';
import { DataGrid, GridDeleteIcon } from '@mui/x-data-grid';
import Layout from '@/app/components/admin/Layout';
import Header from '@/app/components/admin/Header';
import { Box, Button } from '@mui/material';
import Link from 'next/link';
import ModelConfirm from '@/app/components/admin/ModelConfirm';
import { AiOutlineSearch } from 'react-icons/ai';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { toast } from 'react-toastify';
const SERVER_URL = 'https://server.taggo.vn';

interface IPage {
    _id: string;
    title: string;
    description: string;
}
function Page() {
    const [pages, setPages] = useState<IPage[]>([]);
    const [pageFilter, setPageFilter] = useState<IPage[]>([]);
    const [loading, setLoading] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const router = useRouter();

    const getData = async () => {
        setIsLoading(true)
        const data = await axios.get('/api/page');        
        if (data) {
            setIsLoading(false)
            setPages(data.data.data)
            setPageFilter(data.data.data)
        }
        return data
    };
    useEffect(() => {
        getData()
    }, [])
    const handleEditpage = (id: string) => {
        router.push(`/admin/page/${id}`)
    }
    const handleDelete = async (id: string) => {
        try {
            await axios.delete(`/api/page/${id}`);
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

    const toSlug = (str:string) => {
        return str.toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[đĐ]/g, 'd')
            .replace(/([^0-9a-z-\s])/g, '');
    };
    
    const handleSearch = (e:any) => {
        const searchText = toSlug(e.target.value);
        const filterProduct = pageFilter.filter(item => toSlug(item.title).includes(searchText));
        setPages(filterProduct);
    };
    
    const Description = (params:any) => {
        return (
          <div dangerouslySetInnerHTML={{ __html: params.value }} />
        );
      };
    const columns = [
        { field: 'title', headerName: 'Title', width: 350 },
        { field: 'description', headerName: 'Description', width: 450,renderCell: Description, },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 200,
            renderCell: (params: any) => {
                const page = params.row
                return (
                    <div className='flex gap-5 justify-between'>
                        <Button onClick={() => handleEditpage(page?.id)} variant="contained" color="primary" size="small" style={{ backgroundColor: '#1976d2', color: 'white' }}>
                            Edit
                        </Button>{' '}
                        <Button onClick={() => handleDelete(page?.id)} variant="contained" color="error" size="small" startIcon={<GridDeleteIcon />} style={{ backgroundColor: '#d32f2f', color: 'white' }}>
                            Delete
                        </Button>
                    </div>
                );
            },
        },
    ] as const;


    return (
        <>
            <Layout activate='page'>
                <>
                    <Header
                        title='Page'
                        strong
                        className='relative max-md:fixed'
                    />
                    <Box className='h-[400px] w-full px-3 py-3'>
                        <div className='flex justify-between pb-3'>
                            <div className=" flex  items-center border-[1px] rounded-[8px] px-3 overflow-hidden" >
                                <input onChange={handleSearch} type="search" name="" placeholder='Find a Station...' className=' outline-none py-2 p-3 ' style={{ background: 'none', border: 'none', color: 'black' }} />
                                <AiOutlineSearch size={24} className=' text-[#a8a8aa]' />
                            </div>
                            <Link href="/admin/page/create-page" >
                                <Button variant="contained" color="primary" size="small" style={{ backgroundColor: '#1976d2', color: 'white' }} >
                                    Add
                                </Button>
                            </Link>
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
                            rows={pages.map((page) => ({
                                id: page?._id,
                                title: page?.title,
                                description: page?.description,
                            }))}
                        />
                        )}
                    </Box>
                </>
            </Layout>
        </>
    );
}

export default Page;
