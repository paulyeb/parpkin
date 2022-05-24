import { useState, useEffect } from "react";
import { request }  from '../helpers';

const useMenu = () => {
    const [allMenu, setAllMenu] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = () => {
        setIsLoading(true);
        
        request.get('menu', (data) => {
            console.log(data),
            setAllMenu(data)
            setIsLoading(false);
        }); 
    }

    const addMenuItem = (newMenuItem) => {
        setIsLoading(true);

        request.post('menu', newMenuItem, (data) => {
            fetchMenu();
            setIsLoading(false);
            console.log('THIS IS THE MENU: ', data);
        }, true);
    }

    // const getPreparedData = (data) => {
    //     let formData = new FormData();

    //     formData.append('category_id', data['category_id']);
    //     formData.append('name', data['name']);
    //     formData.append('description', data['description']);
    //     formData.append('price', data['price']);
    //     formData.append('image', data['image']);

    //     return formData;
    // };
    
    return {allMenu, addMenuItem, isLoading};
}

export default useMenu;