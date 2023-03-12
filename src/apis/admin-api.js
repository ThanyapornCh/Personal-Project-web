import axios from '../config/axios';

export const getAllOrderStatusApi = () => axios.get('/admin/checkOrder');
