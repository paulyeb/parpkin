import { useEffect, useState } from "react";

const useUser = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        fetch("http://localhost:8000/api/v1/users")
            .then(res => res.json())
            .then(data => {
                console.log(data),
                setUsers(data)
            })
    }

    const addNewUser = (userDetails) => {
        fetch("http://localhost:8000/api/v1/users", {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(userDetails),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data),
                setUsers(data)
            })
    }

    return { users, addNewUser }
    
}

export default useUser;