import axios from "axios"
import { useState, useEffect } from "react"

export const useFetchCategories = () => {
    const [categories, setCategories] = useState([]);
    const fetchData = async () => {
        const response = await axios.get('https://fakestoreapi.com/products/categories');
        setCategories(response.data);
    };
    useEffect(() => {
        fetchData();
    }, []);
    return categories;
};

export const useFetchProducts = () => {
    const [products, setProducts] = useState([]);
    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
    };
    useEffect(() => {
        fetchProducts();
    }, []);
    return { data: products };
};

export const useFeatchProductId=(url)=>{
    const [id, setid] = useState()
    const fetchDataid=async()=>{
     const responseId=await axios.get(url)
     setid(responseId.data)
    }
    useEffect(() => {
        fetchDataid()
    },[url])
    return id
}
