import { useState, useEffect } from "react";

const useMenu = () => {
    const [allMenu, setAllMenu] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        setIsLoading(true);

        await fetch('http://localhost:8000/api/v1/menu')
            .then(res => res.json())
            .then(data => {
                console.log(data),
                setAllMenu(data)
            })

        setIsLoading(false);
    }

    const addMenuItem = async (newMenuItem) => {
        setIsLoading(true);

        await fetch('http://localhost:8000/api/v1/menu', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(newMenuItem),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
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
    
    return {allMenu, addMenuItem, isLoading};
}

export default useMenu;