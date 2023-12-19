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

interface IBlog {
    _id: string;
    title: string;
    categoryId: string;
    description: string;
    image: string;
}
interface ICategory {
    _id: string;
    name: string;
}
function Blog() {
    const [blogs, setBlogs] = useState<IBlog[]>([]);
    const [blogFilter, setBlogFilter] = useState<IBlog[]>([]);
    const [loading, setLoading] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [categorys, setCategorys] = useState<ICategory[]>([])
    const router = useRouter();

    const getData = async () => {
        setIsLoading(true)
        const data = await axios.get('/api/blog');        
        if (data) {
            setIsLoading(false)
            setBlogs(data.data.data)
            setBlogFilter(data.data.data)
        }
        return data
    };
    useEffect(() => {
        getData()
    }, [])
    const handleEditBlog = (id: string) => {
        router.push(`/admin/blog/${id}`)
    }
    const handleDelete = async (id: string) => {
        try {
            await axios.delete(`/api/blog/${id}`);
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
        const filterProduct = blogFilter.filter(item => toSlug(item.title).includes(searchText));
        setBlogs(filterProduct);
    };
    
    const Description = (params:any) => {
        return (
          <div dangerouslySetInnerHTML={{ __html: params.value }} />
        );
      };
      const getCategory = async () => {
        const data = await axios.get('/api/category');
        if (data) {
            setCategorys(data.data.data)
        }
        return data
    };
    useEffect(() => {
        getCategory()
    }, [])
    const columns = [
        { field: 'title', headerName: 'Title', width: 250 },
        {
            field: 'categoryId',
            headerName: 'Category',
            width: 150,
            renderCell: (params: any) => {
                const categoryId = params.row.categoryId;
                const category = categorys.find((cat: ICategory) => cat._id === categoryId);
                return category ? category.name : '';
            },
        },
        {
            field: 'image',
            headerName: 'Image',
            width: 100,
            renderCell: (params: any) => (
                <img
                    src={`${SERVER_URL}/files_blog/${params.row.image}`}
                    alt="Thumbnail"
                    className='h-full w-full object-cover'
                    style={{ maxHeight: '100px' }}
                />
            ),
        },
        { field: 'description', headerName: 'Description', width: 300,renderCell: Description, },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 200,
            renderCell: (params: any) => {
                const blog = params.row
                return (
                    <div className='flex gap-5 justify-between'>
                        <Button onClick={() => handleEditBlog(blog?.id)} variant="contained" color="primary" size="small" style={{ backgroundColor: '#1976d2', color: 'white' }}>
                            Edit
                        </Button>{' '}
                        <Button onClick={() => handleDelete(blog?.id)} variant="contained" color="error" size="small" startIcon={<GridDeleteIcon />} style={{ backgroundColor: '#d32f2f', color: 'white' }}>
                            Delete
                        </Button>
                    </div>
                );
            },
        },
    ] as const;


    return (
        <>
            <Layout activate='blog'>
                <>
                    <Header
                        title='Blog'
                        strong
                        className='relative max-md:fixed'
                    />
                    <Box className='h-[400px] w-full px-3 py-3'>
                        <div className='flex justify-between pb-3'>
                            <div className=" flex  items-center border-[1px] rounded-[8px] px-3 overflow-hidden" >
                                <input onChange={handleSearch} type="search" name="" placeholder='Find a Station...' className=' outline-none py-2 p-3 ' style={{ background: 'none', border: 'none', color: 'black' }} />
                                <AiOutlineSearch size={24} className=' text-[#a8a8aa]' />
                            </div>
                            <Link href="/admin/blog/create-blog" >
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
                            rows={blogs.map((blog) => ({
                                id: blog?._id,
                                title: blog?.title,
                                categoryId: blog?.categoryId,
                                description: blog?.description,
                                image: blog?.image
                            }))}
                        />
                        )}
                    </Box>
                </>
            </Layout>
        </>
    );
}

export default Blog;
