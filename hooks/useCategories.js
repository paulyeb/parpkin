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

    const addCategory = (newCategory) => {
        setIsLoading(true);
        console.log('NEW CATEGORY DATA: ', newCategory);
        newCategory = getPreparedData(newCategory);

        fetch('http://localhost:8000/api/v1/categories/', {
                method: 'POST',
                // mode: 'cors',
                body: newCategory,
                headers: {
                    // 'Accept': "multipart/form-data",
                    // 'Content-Type': "multipart/form-data",
                    // 'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('api_token')}`
                }
            }
        )
        .then(res => res.json())
        .then(data => {
            console.log(data),
            fetchCategories();
            setIsLoading(false);
        })
        .catch((error) => console.log(error))
    }

    const updateCategory = (newCategory) => {
        fetch(`http://localhost:8000/api/v1/categories/${id}`, {
            method: 'PUT',
            mode: 'cors',
            body: getPreparedData(newCategory),
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

    const getPreparedData = (data) => {
        let formData = new FormData();

        formData.append('name', data['name'])
        formData.append('image', data['image'])

        return formData;
    }
    
    return { categories, addCategory, updateCategory, isLoading };
}

export default useCategories;