import { useState, useEffect } from "react";

const useCategories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = () => {
        fetch('http://localhost:8000/api/v1/categories')
            .then(res => res.json())
            .then(data => {
                console.log(data),
                setCategories(data)
            })
    }

    const addCategory = (newCategory) => {
        fetch('http://localhost:8000/api/v1/categories', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(newCategory),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                }
            }
        )
        .then(res => res.json())
        .then(data => {
            console.log(data),
            fetchCategories();
        })
        .catch((err) => console.log(err));

    }
    
    return {categories, addCategory};
}

export default useCategories;