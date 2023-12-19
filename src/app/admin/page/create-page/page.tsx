"use client"
import React, { useState, ChangeEvent } from 'react';
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

interface IPage {
    title: string;
    description: string;
}
interface Page {
    title: boolean;
    description: boolean;
}
function CreatePage() {
    const [page, setPage] = useState<IPage>({
        title: '',
        description: '',
    })
    const [requireSetting, setRequireSetting] = useState<Page>({
        title: false,
        description: false,
    });

    const router = useRouter()

    const handleCreate = async () => {
        if (!page.title || !page.description ) {
            setRequireSetting({
                title: !page.title,
                description: !page.description,
            });
            return;
        }
        await axios
            .post('/api/page', {
                title: page.title,
                description: page.description,
            })
            .then((response) => {
                toast.success('More Successes !!!')
                router.push('/admin/page')
            })
            .catch((error) => {
                console.log(error);
                toast.error('More Failures !!!')
            });
    };


    const handleDescriptionChange = (description: string) => {
        setPage({ ...page, description: description });
    };
    return (
        <>
            <Layout activate='page'>
                <>
                    <Header
                        title='Create Page'
                        strong
                        className='relative max-md:fixed'
                        isBack
                    />
                    <div id='stylescroll' className='flex flex-col items-start pb-20 overflow-auto h-screen'>
                        <div className='flex flex-col w-full p-3 gap-[10px]'>
                            <div className='flex flex-col gap-[5px]'>
                                <label className='text-[#111928] font-medium text-[18px]' >Page Title</label>
                                <input
                                    value={page.title}
                                    onChange={e =>
                                        setPage({ ...page, title: e.target.value })
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
                                <label className='text-[#111928] font-medium text-[18px]'>
                                    Page Description
                                </label>
                                <ReactQuill
                                    value={page?.description}
                                    onFocus={() => setRequireSetting({ ...requireSetting, description: false })}
                                    onChange={handleDescriptionChange}
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
    );
}

export default CreatePage;
