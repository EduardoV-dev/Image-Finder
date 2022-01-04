import { USERS_ENDPOINT } from '@consts/api';
import { Axios } from './config';

export const fetchUserData = async username => {
  console.log(username);
  const data = await Axios.get(`/${USERS_ENDPOINT}/${username}`);
  
  return data.data;
}