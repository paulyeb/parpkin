import { useState, useEffect } from "react";

const useMenu = () => {
    const [allMenu, setAllMenu] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        setIsLoading(true);

        await fetch('http://localhost:8000/api/v1/menu', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('api_token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data),
                setAllMenu(data)
            })

        setIsLoading(false);
    }

    const addMenuItem = async (newMenuItem) => {
        setIsLoading(true);
        console.log(newMenuItem);

        await fetch('http://localhost:8000/api/v1/menu', {
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify(newMenuItem),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('api_token')}`
                }
            }
        )
        .then(res => res.json())
        .then(data => {
            console.log(data),
            fetchMenu();
        })
        .catch((err) => console.log(err));

        setIsLoading(false);

    }

    const getPreparedData = (data) => {
        let formData = new FormData();

        formData.append('category_id', data['category_id']);
        formData.append('name', data['name']);
        formData.append('description', data['description']);
        formData.append('price', data['price']);
        formData.append('image', data['image']);

        return formData;
    };
    
    return {allMenu, addMenuItem, isLoading};
}

export default useMenu;