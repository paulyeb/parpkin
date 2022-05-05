import { useEffect, useState } from "react";

const useOrder = () => {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        setIsLoading(true);
        
        await fetch("http://localhost:8000/api/v1/orders")
            .then(res => res.json())
            .then(data => {
                console.log(data),
                setOrders(data)
            }) 
            
        setIsLoading(false);
    }

    const addNewOrder = async (orderDetails) => {
        setIsLoading(true);
        
        await fetch("http://localhost:8000/api/v1/orders", {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(orderDetails),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data),
                setOrders(data)
            }) 
            
        setIsLoading(false);
    }

    return { orders, addNewOrder, isLoading }
    
}

export default useOrder;