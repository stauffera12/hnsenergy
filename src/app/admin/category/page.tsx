"use client"
import React, { useEffect, useState } from 'react';
import { BiCategory } from 'react-icons/bi';
import axios from 'axios';
import Layout from '@/app/components/admin/Layout';
import ModalCategory from '@/app/components/admin/ModalCategory';
import { toast } from 'react-toastify';
import ModelConfirm from '@/app/components/admin/ModelConfirm';
import Header from '@/app/components/admin/Header';

interface ICategory {
    _id: string;
    name: string;
}

const Category = () => {
    const [openModal, setOpenModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [isDelete, setIsDelete] = useState(false);
    const [idTemp, setIdTemp] = useState('');
    const [categorys, setCategorys] = useState<ICategory[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [editCategory, setEditCategory] = useState<ICategory | undefined>(undefined);

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const getCategory = async () => {
        try {
            const response = await axios.get('/api/category');
            if (response && response.data && response.data.data) {
                setCategorys(response.data.data);
                setIsLoading(false);
            }
        } catch (error) {
            toast.error('Failed to fetch categories');
        }
    };

    useEffect(() => {
        getCategory();
    }, []);

    const handleFilterCategory = () => {
        return categorys?.filter((category) => {
            return category?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase());
        });
    };

    const handleConfirmDelete = (id: string) => {
        setIsDelete(true);
        setIdTemp(id);
    };

    const handleRemoveCategory = async () => {
        try {
            await axios.delete(`/api/category/${idTemp}`);
            setIsDelete(false);
            toast.error('Successfully deleted');
            getCategory();
        } catch (error) {
            toast.error('Failed to delete');
        }
    };

    const handleEditCategory = (categoryToEdit: ICategory) => {
        setOpenModal(true);
        setEditCategory(categoryToEdit);
    };

    const handleAddCategory = () => {
        setOpenModal(true);
        setEditCategory(undefined);
    };

    return (
        <>
            <Layout activate='Category'>
                <>
                    <Header
                        title='Category'
                        strong
                        className='relative max-md:fixed' />
                    <ModelConfirm isOpen={isDelete} setIsOpen={setIsDelete} onClick={handleRemoveCategory} title='Delete' />
                    <div className='py-[20px] max-sm:p-[20px]'>
                        <div className='bg-white flex justify-center h-[100%] rounded-2xl'>
                            <div className='w-[630px] px-[100px] flex flex-col max-lg:px-[50px] max-lg:w-[500px] max-lg:h-[450px] max-sm:px-[20px] max-sm:w-[350px] max-sm:h-[500px]'>
                                <h2 className='text-[22px] font-semibold mb-[30px]'>Category List</h2>
                                <label htmlFor='' className='flex items-center justify-between text-[14px] font-semibold mb-3'>
                                    <span>Category</span>
                                    <span onClick={handleAddCategory} className='flex items-center gap-1 cursor-pointer'>
                                        <BiCategory size={22} className='text-[#0070F0]' />
                                        Add Category
                                    </span>
                                </label>
                                <input
                                    type='text'
                                    placeholder='Find Category'
                                    className='outline-none border-[1px] border-[#CDCFD0] bg-white p-[10px] py-2 w-full rounded-[5px]'
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                {isLoading ? (
                                    <div className='p-5 flex justify-center items-center'>
                                        <img src='/loading.png' alt='' className='animate-spin h-[80px]' />
                                    </div>
                                ) : (
                                    <div id='stylescroll' className='mt-[20px] flex flex-col gap-5 h-[300px] overflow-auto px-2'>
                                        {handleFilterCategory()?.map((category) => (
                                            <div key={category?._id}>
                                                <div className='flex items-center justify-between'>
                                                    <span
                                                        className='flex items-center cursor-pointer gap-1'
                                                        onClick={() => handleEditCategory(category)}
                                                    >
                                                        {category?.name}
                                                    </span>
                                                    <span
                                                        className='cursor-pointer ml-5 text-[#0070F0]'
                                                        onClick={() => handleConfirmDelete(category?._id)}
                                                    >
                                                        Remove
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <ModalCategory
                        open={openModal}
                        handleClose={handleCloseModal}
                        mode={editCategory ? 'edit' : 'add'}
                        editCategory={editCategory}
                    />
                </>
            </Layout>
        </>
    );
};

export default Category;
