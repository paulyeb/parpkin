import { useEffect, useState } from "react";

const useUser = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        setIsLoading(true);

        await fetch("http://localhost:8000/api/v1/users")
            .then(res => res.json())
            .then(data => {
                console.log(data),
                setUsers(data)
            }) 
            
            setIsLoading(false);
    }

    const addNewUser = async (userDetails) => {
        setIsLoading(true);

        await fetch("http://localhost:8000/api/v1/users", {
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
            
            setIsLoading(false);
    }

    return { users, addNewUser, isLoading }
    
}

export default useUser;