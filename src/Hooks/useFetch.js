import axios from 'axios';
import {useState,useEffect} from 'react';
function useFetch(url){
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(true);
    const[error,setError]=useState(null);
    const fetchData= async ()=>{
        try{
            const{data:responseData}= await axios.get(url);
            setData(responseData);
            setLoading(false);
        }
        catch(err){
            setError(err);
            setLoading(false);
        }
        
    }
    useEffect(()=> {
        fetchData();
    },[]);
    return {data,loading,error};
}
export default useFetch;