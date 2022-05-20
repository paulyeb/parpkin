import { useState, useEffect } from "react";

const useCategories = () => {
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories =  () => {
        setIsLoading(true);

        fetch('http://localhost:8000/api/v1/categories', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('api_token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setCategories(data)
                setIsLoading(false);    
            })

    }

    const addCategory = async (newCategory) => {
        setIsLoading(true);

        await fetch('http://localhost:8000/api/v1/categories', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(newCategory),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('api_token')}`
            }
            }
        )
        .then(res => res.json())
        .then(data => {
            fetchCategories();
        })
        .catch((err) => console.log(err));

        setIsLoading(false);

    }

    const updateCategory = (newCategory) => {
        fetch(`http://localhost:8000/api/v1/categories/${id}`, {
            method: 'PUT',
            mode: 'cors',
            body: JSON.stringify(newCategory),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('api_token')}`
            }
            }
        )
        .then(res => res.json())
        .then(data => {
            fetchCategories();
        })
        .catch((err) => console.log(err));

    }
    
    return { categories, addCategory, updateCategory, isLoading };
}

export default useCategories;