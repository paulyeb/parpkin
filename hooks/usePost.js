import { useState, useEffect } from "react";

const usePost = () => {
    const [allMenu, setAllMenu] = useState([]);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = () => {
        fetch('http://localhost:8000/api/v1/meals')
            .then(res => res.json())
            .then(data => {
                console.log(data),
                setAllMenu(data)
            })
    }

    const addMeal = (data) => {
        fetch('http://localhost:8000/api/v1/meals', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then(res => res.json())
        .then(data => {
            console.log(data),
            fetchMenu();
        })
        .catch((err) => console.log(err));

        return {allMenu, addMeal};
    }
}

export default usePost;