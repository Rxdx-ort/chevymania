import axios from 'axios';
export const api = axios.create({ baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api' });
api.interceptors.request.use(config => { const token = localStorage.getItem('token'); if (token)
    config.headers.Authorization = `Bearer ${token}`; return config; });
export const errorMessage = (e) => axios.isAxiosError(e) ? e.response?.data?.error || 'No fue posible completar la operación' : 'Error inesperado';
