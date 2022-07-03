import { useState, useEffect } from "react";
import { request }  from '../helpers';

export default () => {
    const [specialOffers, setSpecialOffers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    // const [paginationData, setPaginationData] = useState(null);

    useEffect(() => {
        fetchSpecialOffers();
    }, []);

    const fetchSpecialOffers = (params) => {
        setIsLoading(true);
        
        request.get('specialOffers', '', (data) => {
            setSpecialOffers(data.data);
            setIsLoading(false);
        }, params); 
    }

    const addSpecialOffer = (specialOffer) => {
        setIsLoading(true);

        request.post('specialOffers', '', specialOffer, (data) => {
            fetchSpecialOffers();
            setIsLoading(false);
        }, true);
    }

    const updateSpecialOffer = (id, updatedSpecialOffer) => {
        setIsLoading(true);

        request.put('specialOffers', id, updatedSpecialOffer, (data) => {
            fetchSpecialOffers();
            setIsLoading(false);
        }, true);
    }
    
    return {specialOffers, addSpecialOffer, updateSpecialOffer, fetchSpecialOffers, isLoading};
}
