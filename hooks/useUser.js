import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const useUser = () => {
    const router = useRouter();

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        setIsLoading(true);

        await fetch("http://localhost:8000/api/v1/users", {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('api_token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data),
                setUsers(data)
            }) 
            
            setIsLoading(false);
    }

    const addNewUser = async (userDetails) => {
        setIsLoading(true);

        const res = await fetch("http://localhost:8000/api/v1/users", {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(userDetails),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('api_token')}`
            }
        })
        
        const data = await res.json()
            
        console.log(data);

        setUsers(data);
            
        setIsLoading(false);

        }

        const login = (credentials) => {
            setIsLoading(true);

            fetch(`http://localhost:8000/api/v1/login`, {
                method: 'POST',
                body: JSON.stringify(credentials),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('api_token')}`
                }
            })
                .then ((response) => response.json())
                .then(data => {
                    localStorage.setItem('api_token', JSON.stringify(data.api_token)),
                    console.log(data);
                    setIsLoading(false);
                }) 
                .catch((error) => {
                    console.log('Something went wrong.', error)
                })
                
        }

        const logout = () => {
            setIsLoading(true);

            fetch(`http://localhost:8000/api/v1/logout`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('api_token')}`
                }
            })
                .then(res => res.json())
                .then(data => data)

            localStorage.clear('api_token');

            setIsLoading(false);
        }

    return { users, addNewUser, login, logout, isLoading }
    
}

export default useUser;