

import axios from 'axios';

type ApiResponse = {
    message:string;
    data?:any;
}



const API = axios.create({
    baseURL: 'http://localhost:5100',
})

export const fetchData = async ():Promise<ApiResponse> => {
    try {
        const response = await API.get('/'); 
        return {
            message: 'Data fetched successfully',
            data: response.data
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return {
            message: 'Error fetching data',
            data: undefined
        };
    }
};