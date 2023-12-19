"use client"
import React, { useState, ChangeEvent, useEffect } from 'react';
import { DataGrid, GridDeleteIcon } from '@mui/x-data-grid';
import Layout from '@/app/components/admin/Layout';
import Header from '@/app/components/admin/Header';
import { Button, FormControl, InputLabel, OutlinedInput, TextField } from '@mui/material';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic'
import Link from 'next/link';
import { ArrowBack } from '@mui/icons-material';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { FaCloudUploadAlt } from 'react-icons/fa';
const SERVER_URL = 'https://server.taggo.vn';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

interface IBlog {
    title: string;
    description: string;
    categoryId: string;
    image: string;
}
interface Blog {
    title: boolean;
    description: boolean;
    image: boolean;
    categoryId: boolean;
}
interface ICategory {
    _id: string;
    name: string;
}
function UpdateBlog({ params }: { params: { blogId: string } }) {
    const [blog, setBlog] = useState<IBlog>({
        title: '',
        image: '',
        description: '',
        categoryId: '',
    })
    const [requireSetting, setRequireSetting] = useState<Blog>({
        title: false,
        description: false,
        image:false,
        categoryId:false,
    });
    const [categorys, setCategorys] = useState<ICategory[]>([])
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
    
    const router = useRouter()
    const handleGetBlogById = async (id: string) => {
        try {
            if (id) {
                const data = await axios.get(`/api/blog/${id}`);
                if (data) {
                    setBlog(data.data.data)
                }
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        handleGetBlogById(params.blogId)
    }, [params.blogId])
    const handleEdit = async (id:string) => {
        if (!blog.title || !blog.description || !blog.categoryId || !blog.image) {
            setRequireSetting({
                title: !blog.title,
                description: !blog.description,
                image: !blog.image,
                categoryId: !blog.categoryId,
            });
            return;
        }
        await axios
            .put(`/api/blog/${id}`, {
                title: blog.title,
                image: blog.image,
                description: blog.description,
                categoryId: blog.categoryId
            })
            .then((response) => {
                toast.success('More Successes !!!')
                router.push('/admin/blog')
            })
            .catch((error) => {
                console.log(error);
                toast.error('More Failures !!!')
            });
    };
    const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const file = e.target.files[0];
            const fileUrl = await uploadFile(file);
            if (fileUrl) {
                setBlog({ ...blog, image: fileUrl });
            }
        }
    };

    async function uploadFile(file: File) {
        if (!file) return;
        const body = new FormData();
        const type = file.name?.split('.').pop();
        const mediaName = `${file.lastModified}.${type}`;
        body.append('id', mediaName);
        body.append('file', file);
        const res = await fetch(`${SERVER_URL}/upload/file`, { method: 'POST', body });
        if (res.ok) {
            return `${mediaName}`;
        }
    }

    const handleDescriptionChange = (description: string) => {
        setBlog({ ...blog, description: description });
    };
    return (
        <>
            <Layout activate='blog'>
                <>
                    <Header
                        title='Edit Blog'
                        strong
                        className='relative max-md:fixed'
                        isBack
                    />
                    <div id='stylescroll' className='flex flex-col items-start pb-20 overflow-auto h-screen'>
                        <div className='flex flex-col w-full p-3 gap-[10px]'>
                            <div className='flex flex-col gap-[5px]'>
                                <label className='text-[#111928] font-medium text-[18px]'>Image</label>
                                <label htmlFor='product-image' className='text-[#111928] border-[1px] rounded-[5px] py-2 p-4 text-[18px] flex items-center gap-2 cursor-pointer'>
                                    <FaCloudUploadAlt />
                                    Click to upload
                                </label>
                                <input
                                    defaultValue={blog?.image}
                                    onChange={handleFileChange}
                                    id='product-image'
                                    type='file'
                                    className='hidden'
                                    onFocus={() => setRequireSetting({ ...requireSetting, image: false })}
                                />
                                {blog.image && (
                                    <img
                                    src={`${SERVER_URL}/files_blog/${blog.image}`}
                                        alt="Preview"
                                        className='rounded-[5px] border-[1px]'
                                        style={{ maxWidth: '200px', maxHeight: '200px' }}
                                    />
                                )}
                                {requireSetting.image && (
                                            <p className='text-blue-500 w-[55%] max-md:w-full text-[13px] '>
                                                Please enter the Image !!!
                                            </p>
                                        )}
                            </div>
                            <div className='flex flex-col gap-[5px]'>
                                <label className='text-[#111928] font-medium text-[18px]' >Blog Title</label>
                                <input
                                    value={blog?.title}
                                    onChange={e =>
                                        setBlog({ ...blog, title: e.target.value })
                                    }
                                    onFocus={() => setRequireSetting({ ...requireSetting, title: false })}
                                    type="text" id='input' placeholder='Enter Title' className=' outline-none py-2 p-4 border-[1px] rounded-[5px]' />
                                     {requireSetting.title && (
                                        <p className='text-blue-500 w-[55%] max-md:w-full text-[13px] '>
                                            Please enter the Title !!!
                                        </p>
                                    )}
                            </div>
                            <div className='flex flex-col gap-[5px]'>
                                    <label className='text-[#111928] font-medium text-[18px]' >Category</label>
                                    <select
                                        id='select-category'
                                        className=' w-[25%] outline-none py-2 p-4 border-[1px] rounded-[5px]'
                                        value={blog?.categoryId}
                                        onChange={e => setBlog(prevBlog => ({ ...prevBlog, categoryId: e.target.value }))}>
                                        <option value="">Select Category</option>
                                        {categorys?.map(category => (
                                            <option key={category._id} value={category._id}>
                                                {category.name}
                                            </option>
                                        ))}
                                    </select>
                                    {requireSetting.categoryId && (
                                        <p className='text-blue-500 w-[55%] max-md:w-full text-[13px]'>
                                            Please select a Category !!!
                                        </p>
                                    )}
                                </div>
                            <div className='flex flex-col gap-[5px]'>
                                <label className='text-[#111928] font-medium text-[18px]'>
                                    Blog Description
                                </label>
                                <ReactQuill
                                    value={blog?.description}
                                    onChange={handleDescriptionChange}
                                    onFocus={() => setRequireSetting({ ...requireSetting, description: false })}
                                    placeholder="Enter Description"
                                    modules={{
                                        toolbar: [
                                            ['bold', 'italic', 'underline'],
                                            [{ list: 'ordered' }],
                                            [{ color: [] }, { background: [] }],
                                            ['link', 'image'],
                                        ],
                                    }}
                                />
                                 {requireSetting.description && (
                                        <p className='text-blue-500 w-[55%] max-md:w-full text-[13px] '>
                                            Please enter the Description !!!
                                        </p>
                                    )}
                            </div>
                            <div className='flex justify-end items-end pt-[10px] '>
                                <Button
                                    onClick={() => handleEdit(params.blogId)}
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
    );
}

export default UpdateBlog;
