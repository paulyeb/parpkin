import { useEffect, useState } from "react";

export default () => {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = () => {
        setIsLoading(true);
        
        fetch("http://localhost:8000/api/v1/orders", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('api_token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data),
                setOrders(data)
                setIsLoading(false);
            }) 
            
    }

    const addNewOrder = (orderDetails) => {
        setIsLoading(true);
        
        fetch("http://localhost:8000/api/v1/orders", {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(orderDetails),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('api_token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data),
                setOrders(data)
                setIsLoading(false);
            }) 
            
    }

    return { orders, addNewOrder, isLoading }
    
}