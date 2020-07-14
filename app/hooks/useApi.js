import { useState } from 'react';

export default useApi = (apiFunction) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const request = async (...args) => {
        const response = await apiFunction(...args);
        if(!response.ok) return setError(true);
 
        setError(false);
         setData(response.data);
     }
    
     return { data, error, loading, request } 
}