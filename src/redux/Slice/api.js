import axios from 'axios'
import store from '../store'
import { logOut } from './AuthSlice';
const api=axios.create({
    baseURL:'',
    timeout:10000,
    headers:{
        'Content-Type':'application/json'
    }
})

api.interceptors.request.use(config=>{
    const token = store.getState().auth.token;
    if(token){
        config.headers.Authorization=`Bearer ${token}`
    }
    return config
})

api.interceptors.response.use(
    response=>response,
    error=> {
        const status=error.response?.status;
        if(status===401){
            store.dispatch(logOut())
        }
        if (status === 500) {
            console.log('Server error');
          }
      
          if (!error.response) {
            console.log('No internet connection');
          }
      
          return Promise.reject(error);
        }
    
)
export default api;