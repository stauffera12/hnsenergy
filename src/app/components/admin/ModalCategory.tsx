import React, { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import { AiOutlineRight, AiOutlineClose } from 'react-icons/ai';
import { Box, IconButton } from '@mui/material';
import axios from 'axios';
import { toast } from 'react-toastify';

type ModalProps = {
    open: boolean;
    handleClose: () => void;
    mode: 'add' | 'edit';
    editCategory?: ICategory;
};

interface ICategory {
    _id?: string;
    name: string;
}

const ModalCategory: React.FC<ModalProps> = ({ open, handleClose, mode, editCategory }) => {
    const [category, setCategory] = useState<ICategory>({
        name: '',
    });

    const [requireSetting, setRequireSetting] = useState<boolean>(false);

    useEffect(() => {
        if (editCategory && mode === 'edit') {
            setCategory(editCategory);
        } else {
            setCategory({ name: '' });
        }
    }, [editCategory, mode]);

    const handleAddOrUpdate = async () => {
        if (!category.name) {
            setRequireSetting(true);
            return;
        }

        try {
            if (mode === 'add') {
                await axios.post('/api/category', { name: category.name });
                toast.success('More Successes !!!');
            } else if (mode === 'edit' && editCategory && editCategory._id) {
                await axios.put(`/api/category/${editCategory._id}`, { name: category.name });
                toast.success('More Successes !!!');
            }

            handleClose();
        } catch (error) {
            console.log(error);
            toast.error('More Failures !!!');
        }
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', color: 'black', padding: '30px', borderRadius: '10px' }}>
                <div className='flex justify-end'>
                    <IconButton
                        aria-label="Close"
                        onClick={handleClose}
                        sx={{ color: 'black' }}
                    >
                        <AiOutlineClose />
                    </IconButton>
                </div>
                <p className='text-xl font-semibold'>{mode === 'add' ? 'New Category' : 'Edit Category'}</p>
                <div className='flex flex-wrap max-lg:flex-col max-lg:items-center pt-3'>
                    <div className='flex flex-col gap-4 w-max items-start flex-1'>
                        <div className='flex w-full flex-col gap-[10px]'>
                            <label htmlFor="" className='text-[14px] font-semibold'>Name</label>
                            <input
                                value={category?.name}
                                onChange={(e) => setCategory({ ...category, name: e.target.value })}
                                onFocus={() => setRequireSetting(false)}
                                type="text"
                                name='name'
                                placeholder='Enter Category'
                                className=' px-[5px] py-2 bg-white border-[1px] border-[#CDCFD0] outline-none rounded-[5px]'
                            />
                            {requireSetting && (
                                <p className='text-blue-500 w-[55%] max-md:w-full text-[13px] '>
                                    Please enter the Name !!!
                                </p>
                            )}
                        </div>
                        <div className='w-[365px] flex justify-center mt-5'>
                            <button onClick={handleAddOrUpdate} className='w-full py-[12px] rounded-full relative text-center mx-auto bg-[#3478F6] text-[15px] text-white font-semibold' type='submit'>
                                {mode === 'add' ? 'Publish' : 'Publish'}
                                <AiOutlineRight size={15} className='absolute right-3 top-[50%] translate-y-[-50%] font-bold' />
                            </button>
                        </div>
                    </div>
                </div>
            </Box>
        </Modal>
    );
};

export default ModalCategory;
