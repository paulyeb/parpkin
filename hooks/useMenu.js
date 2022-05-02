import { useState, useEffect } from "react";

const useMenu = () => {
    const [allMenu, setAllMenu] = useState([]);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = () => {
        fetch('http://localhost:8000/api/v1/menu')
            .then(res => res.json())
            .then(data => {
                console.log(data),
                setAllMenu(data)
            })
    }

    const addMenuItem = (newMenuItem) => {
        fetch('http://localhost:8000/api/v1/menu', {
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

    }
    
    return {allMenu, addMenuItem};
}

export default useMenu;