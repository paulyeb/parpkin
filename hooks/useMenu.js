import { useState, useEffect } from "react";
import { request }  from '../helpers';

export default () => {
    const [allMenu, setAllMenu] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [paginationData, setPaginationData] = useState(null);

    useEffect(() => {
        fetchMenus({
            per_page: 4,
        });
    }, []);

    const fetchMenus = (params) => {
        setIsLoading(true);
        
        request.get('menu', '', (data) => {
            console.log(data),
            setAllMenu(data.data)
            setPaginationData({
                disablePreviousButton: !data.prev_page_url,
                disableNextButton: data.current_page === data.last_page,
                lastPage: data.last_page,
                currentPage: data.current_page,
                total: data.total,
                perPage: data.per_page,
                from: data.from,
                to: data.to,
            });
            setIsLoading(false);
        }, params); 
    }

    const addMenuItem = (newMenuItem) => {
        setIsLoading(true);

        request.post('menu', '', newMenuItem, (data) => {
            fetchMenus();
            setIsLoading(false);
            console.log('THIS IS THE MENU: ', data);
        }, true);
    }

    const updateMenuItem = (id, updatedMenuDetails) => {
        setIsLoading(true);

        request.put('menu', id, updatedMenuDetails, (data) => {
            fetchMenus();
            setIsLoading(false);
            console.log('THIS THE UPDATED MENU: ', data);
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
    
    return {allMenu, addMenuItem, updateMenuItem, fetchMenus, isLoading, paginationData};
}