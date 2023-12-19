import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import axios from 'axios';
// import { onStreamApi, onData } from './OnStream';

const accessToken = Cookies.get('accessToken');
axios.defaults.headers.common['Authorization'] = `Bearer ` + accessToken;

const authURL = '/api/auth';

const authLogin = async (user:any) => {
  try {
    const response = await axios.post(`${authURL}/login`, user);
    const data = response.data;
    if (data && data.token) {
      toast.success('Login Successful!');
      return data;
    } else {
      toast.warning('Please double check your email and password !!!');
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.data.message) {
        toast(error.response?.data.message);
      } else {
        toast('An error occurred during login.');
      }
    } else {
      toast('An error occurred during login. Please try again later.');
      console.error(error);
    }
  }
  return null;
};
export const getUserById =async (id:string | string[] | undefined) => {
  try {
      const data = await axios.get(`/api/user/${id}`)
      return data
  } catch (error) {
      console.log(error);
  }
}

export {
  authLogin,
};
